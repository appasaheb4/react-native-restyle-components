import { View, Text, FlatList, TouchableWithoutFeedback, Modal, StyleSheet, StatusBar, I18nManager, Dimensions, Keyboard, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState, useImperativeHandle, useCallback, useRef, useMemo, } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
import { ArrowBottomIcon, ArrowTopGrayActive, ArrowTopGray4, ArrowBottomGray4, } from '../../../library/assets/icons';
import { useDetectDevice } from '../../../utils/toolkits';
import { useDeviceOrientation } from '../../../utils/useDeviceOrientation';
const { isTablet } = useDetectDevice;
const statusBarHeight = StatusBar.currentHeight || 0;
export const DropDownPriorityList = React.forwardRef(({ title = '', data = [], displayKey = '', displayValue = 'Select', testID, mode = 'default', maxHeight = 340, minHeight = 0, search = false, disable = false, dropdownPosition = 'auto', keyboardAvoiding = true, backgroundColor, containerStyle, accessibilityLabel, onChange, }, currentRef) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const ref = useRef(null);
    const [value, setValue] = useState({ color: '', title: 'Select' });
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState([]);
    const [position, setPosition] = useState();
    const orientation = useDeviceOrientation();
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    useEffect(() => {
        if (displayValue != 'Select')
            setValue({ color: value?.color, title: displayValue });
        else
            setValue({ color: '', title: displayValue });
    }, [displayValue]);
    useEffect(() => {
        setOptionList(data);
    }, [data]);
    const { width: W, height: H } = Dimensions.get('window');
    const styleContainerVertical = useMemo(() => {
        return {
            backgroundColor: 'rgba(0,0,0,0.1)',
            alignItems: 'center',
        };
    }, []);
    const styleHorizontal = useMemo(() => {
        return {
            width: orientation === 'LANDSCAPE' ? W / 2 : '100%',
            alignSelf: 'center',
        };
    }, [W, orientation]);
    const _measure = useCallback(() => {
        if (ref && ref?.current) {
            ref.current.measureInWindow((pageX, pageY, width, height) => {
                let isFull = isTablet
                    ? false
                    : mode === 'modal' || orientation === 'LANDSCAPE';
                if (mode === 'auto') {
                    isFull = false;
                }
                const top = isFull ? 20 : height + pageY + 2;
                const bottom = H - top + height;
                const left = I18nManager.isRTL ? W - width - pageX : pageX;
                setPosition({
                    isFull,
                    width: Math.floor(width),
                    top: Math.floor(top + statusBarHeight),
                    bottom: Math.floor(bottom - statusBarHeight),
                    left: Math.floor(left),
                    height: Math.floor(height),
                });
            });
        }
    }, [H, W, orientation, mode]);
    const eventOpen = () => {
        setIsOpen(true);
    };
    const eventClose = useCallback(() => {
        setIsOpen(false);
    }, []);
    useEffect(() => {
        return eventClose;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useImperativeHandle(currentRef, () => {
        return { open: eventOpen, close: eventClose };
    });
    const onKeyboardDidShow = useCallback((e) => {
        _measure();
        setKeyboardHeight(e.endCoordinates.height);
    }, [_measure]);
    const onKeyboardDidHide = useCallback(() => {
        setKeyboardHeight(0);
        _measure();
    }, [_measure]);
    useEffect(() => {
        const susbcriptionKeyboardDidShow = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const susbcriptionKeyboardDidHide = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            if (typeof susbcriptionKeyboardDidShow?.remove === 'function') {
                susbcriptionKeyboardDidShow.remove();
            }
            if (typeof susbcriptionKeyboardDidHide?.remove === 'function') {
                susbcriptionKeyboardDidHide.remove();
            }
        };
    }, [onKeyboardDidHide, onKeyboardDidShow]);
    const showOrClose = useCallback(() => {
        if (keyboardHeight > 0 && isOpen) {
            return Keyboard.dismiss();
        }
        _measure();
        setIsOpen(!isOpen);
        //scrollIndex();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboardHeight, isOpen, _measure, data]);
    const onSelect = useCallback((item) => {
        setValue(item);
        onChange(item);
        eventClose();
    }, [eventClose, onChange]);
    const _renderModal = useCallback(() => {
        if (isOpen && position) {
            const { isFull, width, height, top, bottom, left } = position;
            const onAutoPosition = () => {
                if (keyboardHeight > 0) {
                    return bottom < keyboardHeight + height;
                }
                return bottom < (search ? 150 : 100);
            };
            if (width && top && bottom) {
                const styleVertical = {
                    left: left,
                    maxHeight: maxHeight,
                    minHeight: minHeight,
                };
                const isTopPosition = dropdownPosition === 'auto'
                    ? onAutoPosition()
                    : dropdownPosition === 'top';
                let keyboardStyle = {};
                let extendHeight = !isTopPosition ? top : bottom;
                if (keyboardAvoiding &&
                    keyboardHeight > 0 &&
                    isTopPosition &&
                    dropdownPosition === 'auto') {
                    extendHeight = keyboardHeight;
                }
                return (<Modal transparent statusBarTranslucent visible={isOpen} supportedOrientations={['landscape', 'portrait']} onRequestClose={showOrClose}>
              <TouchableWithoutFeedback onPress={showOrClose}>
                <View style={StyleSheet.flatten([
                        styles.flex1,
                        isFull && styleContainerVertical,
                        backgroundColor && { backgroundColor: backgroundColor },
                        keyboardStyle,
                    ])}>
                  <View style={StyleSheet.flatten([
                        styles.flex1,
                        !isTopPosition
                            ? { paddingTop: extendHeight }
                            : {
                                justifyContent: 'flex-end',
                                paddingBottom: extendHeight,
                            },
                        isFull && styles.fullScreen,
                    ])}>
                    <View style={StyleSheet.flatten([
                        styles.container,
                        isFull ? styleHorizontal : styleVertical,
                        {
                            width,
                        },
                        containerStyle,
                    ])}>
                      {optionList?.length > 0 ? (<FlatList testID={testID + ' flatlist'} accessibilityLabel={accessibilityLabel + ' flatlist'} keyboardShouldPersistTaps="handled" contentContainerStyle={{
                            // paddingBottom: optionList?.length > 8 ? 16 : 0,
                            paddingBottom: 16,
                        }} style={styles.flatListView} data={optionList} renderItem={({ item, index, }) => (<View key={index?.toString()}>
                              <TouchableOpacity style={{
                                flexDirection: 'row',
                                marginVertical: 6,
                            }} onPress={() => {
                                onSelect(item);
                            }}>
                                <View style={[
                                styles.square,
                                {
                                    backgroundColor: item.color,
                                },
                            ]}/>
                                <Text style={[styles.text, { marginLeft: 4 }]}>
                                  {item[displayKey]}
                                </Text>
                              </TouchableOpacity>
                            </View>)} keyExtractor={(_item, index) => index.toString()}/>) : (<View>
                          <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            margin: 40,
                            color: theme.colors.gray5,
                        }}>
                            No results found
                          </Text>
                        </View>)}
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>);
            }
            return null;
        }
        return null;
    }, [
        isOpen,
        position,
        maxHeight,
        minHeight,
        dropdownPosition,
        keyboardAvoiding,
        showOrClose,
        styleContainerVertical,
        backgroundColor,
        containerStyle,
        styleHorizontal,
    ]);
    return (<View ref={ref} onLayout={_measure}>
        <TouchableWithoutFeedback onPress={showOrClose}>
          <View>
            {!_.isEmpty(title) && <Text style={styles.header}>{title}</Text>}
            <View style={[
            styles.warperView,
            styles.optionView,
            disable && { backgroundColor: theme.colors.gray1 },
        ]}>
              <View style={{ flexDirection: 'row' }}>
                {!_.isEmpty(value.color) && (<View style={[
                styles.square,
                {
                    backgroundColor: value.color,
                    marginRight: 4,
                },
            ]}/>)}
                <Text numberOfLines={1} style={{
            color: disable
                ? theme.colors.gray4
                : value?.title == 'Select'
                    ? theme.colors.gray5
                    : theme.colors.gray6,
        }}>
                  {value?.title?.length < 40
            ? `${value?.title}`
            : `${value?.title?.substring(0, 40)}...`}
                </Text>
              </View>
              {isOpen ? (disable ? (<ArrowTopGray4 />) : (<ArrowTopGrayActive />)) : disable ? (<ArrowBottomGray4 />) : (<ArrowBottomIcon />)}
            </View>
          </View>
        </TouchableWithoutFeedback>
        {_renderModal()}
      </View>);
});
