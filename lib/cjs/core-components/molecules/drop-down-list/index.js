"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownList = void 0;
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const toolkits_1 = require("../../../utils/toolkits");
const useDeviceOrientation_1 = require("../../../utils/useDeviceOrientation");
const theme1_1 = require("../../../theme1");
const styles_1 = __importDefault(require("./styles"));
const icons_1 = require("../../../library/assets/icons");
const { isTablet } = toolkits_1.useDetectDevice;
const statusBarHeight = react_native_1.StatusBar.currentHeight || 0;
exports.DropDownList = react_1.default.forwardRef((props, currentRef) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, styles_1.default)(theme);
    const [value, setValue] = (0, react_1.useState)('Select');
    const orientation = (0, useDeviceOrientation_1.useDeviceOrientation)();
    const { title = '', displayKey = 'title', testID, onChange, containerStyle, data = [], valueField, search = false, maxHeight = 340, minHeight = 0, disable = false, keyboardAvoiding = true, onFocus, onBlur, autoScroll = true, dropdownPosition = 'auto', backgroundColor, accessibilityLabel, mode = 'default', } = props;
    const ref = (0, react_1.useRef)(null);
    const refList = (0, react_1.useRef)(null);
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [listData, setListData] = (0, react_1.useState)(data);
    const [position, setPosition] = (0, react_1.useState)();
    const [keyboardHeight, setKeyboardHeight] = (0, react_1.useState)(0);
    const [optionList, setOptionList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setOptionList(data);
    }, [data]);
    const { width: W, height: H } = react_native_1.Dimensions.get('window');
    const styleContainerVertical = (0, react_1.useMemo)(() => {
        return {
            backgroundColor: 'rgba(0,0,0,0.1)',
            alignItems: 'center',
        };
    }, []);
    const styleHorizontal = (0, react_1.useMemo)(() => {
        return {
            width: orientation === 'LANDSCAPE' ? W / 2 : '100%',
            alignSelf: 'center',
        };
    }, [W, orientation]);
    (0, react_1.useImperativeHandle)(currentRef, () => {
        return { open: eventOpen, close: eventClose };
    });
    (0, react_1.useEffect)(() => {
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
    const eventClose = (0, react_1.useCallback)(() => {
        if (!disable) {
            setVisible(false);
            if (onBlur) {
                onBlur();
            }
        }
    }, [disable, onBlur]);
    const _measure = (0, react_1.useCallback)(() => {
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
                const left = react_native_1.I18nManager.isRTL ? W - width - pageX : pageX;
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
    const onKeyboardDidShow = (0, react_1.useCallback)((e) => {
        _measure();
        setKeyboardHeight(e.endCoordinates.height);
    }, [_measure]);
    const onKeyboardDidHide = (0, react_1.useCallback)(() => {
        setKeyboardHeight(0);
        _measure();
    }, [_measure]);
    (0, react_1.useEffect)(() => {
        const susbcriptionKeyboardDidShow = react_native_1.Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        const susbcriptionKeyboardDidHide = react_native_1.Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            if (typeof (susbcriptionKeyboardDidShow === null || susbcriptionKeyboardDidShow === void 0 ? void 0 : susbcriptionKeyboardDidShow.remove) === 'function') {
                susbcriptionKeyboardDidShow.remove();
            }
            if (typeof (susbcriptionKeyboardDidHide === null || susbcriptionKeyboardDidHide === void 0 ? void 0 : susbcriptionKeyboardDidHide.remove) === 'function') {
                susbcriptionKeyboardDidHide.remove();
            }
        };
    }, [onKeyboardDidHide, onKeyboardDidShow]);
    const getValue = (0, react_1.useCallback)(() => {
        const defaultValue = typeof value === 'object' ? lodash_1.default.get(value, valueField) : value;
        const getItem = data.filter(e => lodash_1.default.isEqual(defaultValue, lodash_1.default.get(e, valueField)));
    }, [data, value, valueField]);
    (0, react_1.useEffect)(() => {
        getValue();
    }, [value, data, getValue]);
    const showOrClose = (0, react_1.useCallback)(() => {
        if (!disable) {
            if (keyboardHeight > 0 && visible) {
                return react_native_1.Keyboard.dismiss();
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
    const onSelect = (0, react_1.useCallback)((item) => {
        setValue(item[displayKey]);
        onChange(item);
        eventClose();
    }, [eventClose, onChange]);
    const _renderDropdown = () => {
        return (<react_native_1.TouchableWithoutFeedback testID={testID} accessible={!!accessibilityLabel} accessibilityLabel={accessibilityLabel} onPress={showOrClose}>
        <react_native_1.View style={styles.dropdown}>
          {!lodash_1.default.isEmpty(title) && <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>}
          <react_native_1.View style={[styles.warperView, styles.optionView]}>
            <react_native_1.Text>{value}</react_native_1.Text>
            {visible ? (<icons_1.ArrowTopIcon color={theme.colors.gray6}/>) : (<icons_1.ArrowBottomIcon color={theme.colors.gray6}/>)}
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.TouchableWithoutFeedback>);
    };
    const _renderModal = (0, react_1.useCallback)(() => {
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
                return (<react_native_1.Modal transparent statusBarTranslucent visible={visible} supportedOrientations={['landscape', 'portrait']} onRequestClose={showOrClose}>
            <react_native_1.TouchableWithoutFeedback onPress={showOrClose}>
              <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.flex1,
                        isFull && styleContainerVertical,
                        backgroundColor && { backgroundColor: backgroundColor },
                        keyboardStyle,
                    ])}>
                <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.flex1,
                        !isTopPosition
                            ? { paddingTop: extendHeight }
                            : {
                                justifyContent: 'flex-end',
                                paddingBottom: extendHeight,
                            },
                        isFull && styles.fullScreen,
                    ])}>
                  <react_native_1.View style={react_native_1.StyleSheet.flatten([
                        styles.container,
                        isFull ? styleHorizontal : styleVertical,
                        {
                            width,
                        },
                        containerStyle,
                    ])}>
                    <react_native_1.FlatList testID={testID + ' flatlist'} accessibilityLabel={accessibilityLabel + ' flatlist'} keyboardShouldPersistTaps="handled" style={styles.flatListView} data={optionList} renderItem={({ item }) => (<react_native_1.View>
                          <react_native_1.TouchableOpacity style={{
                            marginVertical: 8,
                        }} onPress={() => {
                            onSelect(item);
                        }}>
                            <react_native_1.Text style={{ marginLeft: 2 }}>
                              {item[displayKey]}
                            </react_native_1.Text>
                          </react_native_1.TouchableOpacity>
                        </react_native_1.View>)} keyExtractor={(_item, index) => index.toString()}/>
                  </react_native_1.View>
                </react_native_1.View>
              </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>
          </react_native_1.Modal>);
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
    return (<react_native_1.View ref={ref} onLayout={_measure}>
      {_renderDropdown()}
      {_renderModal()}
    </react_native_1.View>);
});
//# sourceMappingURL=index.js.map