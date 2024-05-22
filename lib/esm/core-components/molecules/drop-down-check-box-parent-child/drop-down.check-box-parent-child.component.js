import { View, Text, FlatList, TouchableOpacity, StatusBar, Dimensions, I18nManager, Keyboard, TouchableWithoutFeedback, Modal, StyleSheet, } from 'react-native';
import React, { useEffect, useState, useMemo, useCallback, useImperativeHandle, useRef, } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
import { ArrowBottomIcon, ArrowTopIcon } from '../../../library/assets/icons';
import { useDetectDevice } from '../../../utils/toolkits';
import { useDeviceOrientation } from '../../../utils/useDeviceOrientation';
const { isTablet } = useDetectDevice;
const statusBarHeight = StatusBar.currentHeight || 0;
export const DropDownCheckBoxParentChild = React.forwardRef(({ title = '', displayValue = 'Select', disable = false, data = [], mode = 'default', maxHeight = 340, minHeight = 0, search = false, dropdownPosition = 'auto', keyboardAvoiding = true, backgroundColor, containerStyle, onChange, }, currentRef) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState(displayValue);
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState([]);
    const ref = useRef(null);
    const [position, setPosition] = useState();
    const orientation = useDeviceOrientation();
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    useEffect(() => {
        setOptionList(data);
    }, [data]);
    useEffect(() => {
        if (displayValue == 'Select')
            setOptionList([]);
        setValue(displayValue);
    }, [displayValue]);
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
            if (typeof (susbcriptionKeyboardDidShow === null || susbcriptionKeyboardDidShow === void 0 ? void 0 : susbcriptionKeyboardDidShow.remove) === 'function') {
                susbcriptionKeyboardDidShow.remove();
            }
            if (typeof (susbcriptionKeyboardDidHide === null || susbcriptionKeyboardDidHide === void 0 ? void 0 : susbcriptionKeyboardDidHide.remove) === 'function') {
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
                      <FlatList style={styles.flatListView} data={optionList} contentContainerStyle={{ paddingBottom: 20 }} renderItem={({ item, index, }) => {
                        var _a;
                        return (<View>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                marginVertical: 6,
                                alignItems: 'center',
                            }} onPress={() => {
                                const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                                    var _a;
                                    let childOption = opList;
                                    let isSelected = opList.selected;
                                    if (opIndex == index)
                                        isSelected = !opList.selected;
                                    else
                                        isSelected = false;
                                    const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch) => {
                                        return Object.assign(Object.assign({}, ch), { selected: false });
                                    });
                                    childOption = [
                                        {
                                            [Object.keys(childOption[0])[0]]: newArr,
                                            selected: isSelected,
                                        },
                                    ];
                                    return Object.assign(Object.assign({}, childOption), { selected: isSelected });
                                });
                                onChange(item[0], 0);
                                setValue(Object.keys(item[0])[0]);
                                setOptionList(JSON.parse(JSON.stringify(list)));
                            }}>
                              <View style={[
                                styles.radioCycle,
                                {
                                    backgroundColor: (item === null || item === void 0 ? void 0 : item.selected)
                                        ? theme.colors.primary
                                        : 'transparent',
                                    borderWidth: (item === null || item === void 0 ? void 0 : item.selected) ? 0 : 1,
                                },
                            ]}/>
                              <Text style={[styles.text, { marginLeft: 6 }]}>
                                {Object.keys(item[0])[0]}
                                {(item === null || item === void 0 ? void 0 : item.selected) ? 'yes' : 'no'}
                              </Text>
                            </TouchableOpacity>
                            {(_a = item[0][Object.keys(item[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((e, i) => (<TouchableOpacity style={{
                                    flexDirection: 'row',
                                    marginVertical: 6,
                                    alignItems: 'center',
                                    marginLeft: 30,
                                }} onPress={() => {
                                    const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                                        var _a;
                                        let childOption = opList;
                                        const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch, chIndex) => {
                                            if (index == opIndex && chIndex == i)
                                                return Object.assign(Object.assign({}, ch), { selected: !ch.selected });
                                            return Object.assign(Object.assign({}, ch), { selected: false });
                                            return ch;
                                        });
                                        childOption = [
                                            {
                                                [Object.keys(childOption[0])[0]]: newArr,
                                                selected: false,
                                            },
                                        ];
                                        return childOption;
                                    });
                                    onChange(e, 1);
                                    setValue(e.title);
                                    setOptionList(JSON.parse(JSON.stringify(list)));
                                }}>
                                  <View style={[
                                    styles.radioCycle,
                                    {
                                        backgroundColor: (e === null || e === void 0 ? void 0 : e.selected)
                                            ? theme.colors.primary
                                            : 'transparent',
                                        borderWidth: (e === null || e === void 0 ? void 0 : e.selected) ? 0 : 1,
                                    },
                                ]}/>
                                  <Text style={[styles.text, { marginLeft: 6 }]}>
                                    {e.title}
                                  </Text>
                                </TouchableOpacity>))}
                          </View>);
                    }} keyExtractor={(item, index) => index.toString()}/>
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
        optionList,
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
        <TouchableWithoutFeedback onPress={showOrClose} disabled={disable}>
          <View>
            {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
            <TouchableOpacity disabled={disable} style={styles.warperView} onPress={() => {
            setIsOpen(!isOpen);
        }}>
              <View style={styles.optionView}>
                <Text>{value}</Text>
                {isOpen ? (<ArrowTopIcon color={theme.colors.gray6}/>) : (<ArrowBottomIcon color={theme.colors.gray6}/>)}
              </View>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
        {_renderModal()}
      </View>);
});
//# sourceMappingURL=drop-down.check-box-parent-child.component.js.map