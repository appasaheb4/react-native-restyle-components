import _ from 'lodash';
import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState, } from 'react';
import { Dimensions, FlatList, I18nManager, Keyboard, Modal, StyleSheet, Text, TouchableWithoutFeedback, View, StatusBar, TouchableOpacity, } from 'react-native';
import { useDetectDevice } from '../../../utils/toolkits';
import { useDeviceOrientation } from '../../../utils/useDeviceOrientation';
import { useTheme } from '../../../theme1';
import styleSheet from './styles';
import { ArrowBottomIcon, ArrowTopIcon } from '../../../library/assets/icons';
const { isTablet } = useDetectDevice;
const statusBarHeight = StatusBar.currentHeight || 0;
export const DropDownList = React.forwardRef((props, currentRef) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState('Select');
    const orientation = useDeviceOrientation();
    const { title = '', displayKey = 'title', testID, onChange, containerStyle, data = [], valueField, search = false, maxHeight = 340, minHeight = 0, disable = false, keyboardAvoiding = true, onFocus, onBlur, autoScroll = true, dropdownPosition = 'auto', backgroundColor, accessibilityLabel, mode = 'default', } = props;
    const ref = useRef(null);
    const refList = useRef(null);
    const [visible, setVisible] = useState(false);
    const [listData, setListData] = useState(data);
    const [position, setPosition] = useState();
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [optionList, setOptionList] = useState([]);
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
    useImperativeHandle(currentRef, () => {
        return { open: eventOpen, close: eventClose };
    });
    useEffect(() => {
        return eventClose;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const eventOpen = () => {
        if (!disable) {
            setVisible(true);
            if (onFocus) {
                onFocus();
            }
        }
    };
    const eventClose = useCallback(() => {
        if (!disable) {
            setVisible(false);
            if (onBlur) {
                onBlur();
            }
        }
    }, [disable, onBlur]);
    const _measure = useCallback(() => {
        if (ref && (ref === null || ref === void 0 ? void 0 : ref.current)) {
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
            if (typeof (susbcriptionKeyboardDidShow === null || susbcriptionKeyboardDidShow === void 0 ? void 0 : susbcriptionKeyboardDidShow.remove) === 'function') {
                susbcriptionKeyboardDidShow.remove();
            }
            if (typeof (susbcriptionKeyboardDidHide === null || susbcriptionKeyboardDidHide === void 0 ? void 0 : susbcriptionKeyboardDidHide.remove) === 'function') {
                susbcriptionKeyboardDidHide.remove();
            }
        };
    }, [onKeyboardDidHide, onKeyboardDidShow]);
    const getValue = useCallback(() => {
        const defaultValue = typeof value === 'object' ? _.get(value, valueField) : value;
        const getItem = data.filter(e => _.isEqual(defaultValue, _.get(e, valueField)));
    }, [data, value, valueField]);
    useEffect(() => {
        getValue();
    }, [value, data, getValue]);
    const showOrClose = useCallback(() => {
        if (!disable) {
            if (keyboardHeight > 0 && visible) {
                return Keyboard.dismiss();
            }
            _measure();
            setVisible(!visible);
            setListData(data);
            if (!visible) {
                if (onFocus) {
                    onFocus();
                }
            }
            else {
                if (onBlur) {
                    onBlur();
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disable, keyboardHeight, visible, _measure, data, onFocus, onBlur]);
    const onSelect = useCallback((item) => {
        setValue(item[displayKey]);
        onChange(item);
        eventClose();
    }, [eventClose, onChange]);
    const _renderDropdown = () => {
        return (<TouchableWithoutFeedback testID={testID} accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel} onPress={showOrClose}>
        <View style={styles.dropdown}>
          {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
          <View style={[styles.warperView, styles.optionView]}>
            <Text>{value}</Text>
            {visible ? (<ArrowTopIcon color={theme.colors.gray6}/>) : (<ArrowBottomIcon color={theme.colors.gray6}/>)}
          </View>
        </View>
      </TouchableWithoutFeedback>);
    };
    const _renderModal = useCallback(() => {
        if (visible && position) {
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
                return (<Modal transparent statusBarTranslucent visible={visible} supportedOrientations={['landscape', 'portrait']} onRequestClose={showOrClose}>
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
                    <FlatList testID={testID + ' flatlist'} accessibilityLabel={accessibilityLabel + ' flatlist'} keyboardShouldPersistTaps="handled" style={styles.flatListView} data={optionList} renderItem={({ item }) => (<View>
                          <TouchableOpacity style={{
                            marginVertical: 8,
                        }} onPress={() => {
                            onSelect(item);
                        }}>
                            <Text style={{ marginLeft: 2 }}>
                              {item[displayKey]}
                            </Text>
                          </TouchableOpacity>
                        </View>)} keyExtractor={(_item, index) => index.toString()}/>
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
        visible,
        search,
        position,
        keyboardHeight,
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
      {_renderDropdown()}
      {_renderModal()}
    </View>);
});
//# sourceMappingURL=drop-down-list.component.js.map