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
exports.DropDownPriorityList = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const theme1_1 = require("../../../theme1");
const style_1 = __importDefault(require("./style"));
const icons_1 = require("../../../library/assets/icons");
const toolkits_1 = require("../../../utils/toolkits");
const useDeviceOrientation_1 = require("../../../utils/useDeviceOrientation");
const { isTablet } = toolkits_1.useDetectDevice;
const statusBarHeight = react_native_1.StatusBar.currentHeight || 0;
exports.DropDownPriorityList = react_1.default.forwardRef(({ title = '', data = [], displayKey = '', testID, mode = 'default', maxHeight = 340, minHeight = 0, search = false, dropdownPosition = 'auto', keyboardAvoiding = true, backgroundColor, containerStyle, accessibilityLabel, onChange, }, currentRef) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, style_1.default)(theme);
    const ref = (0, react_1.useRef)(null);
    const [value, setValue] = (0, react_1.useState)({ color: '', title: 'Select' });
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [optionList, setOptionList] = (0, react_1.useState)([]);
    const [position, setPosition] = (0, react_1.useState)();
    const orientation = (0, useDeviceOrientation_1.useDeviceOrientation)();
    const [keyboardHeight, setKeyboardHeight] = (0, react_1.useState)(0);
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
    const eventOpen = () => {
        setIsOpen(true);
    };
    const eventClose = (0, react_1.useCallback)(() => {
        setIsOpen(false);
    }, []);
    (0, react_1.useEffect)(() => {
        return eventClose;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useImperativeHandle)(currentRef, () => {
        return { open: eventOpen, close: eventClose };
    });
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
    const showOrClose = (0, react_1.useCallback)(() => {
        if (keyboardHeight > 0 && isOpen) {
            return react_native_1.Keyboard.dismiss();
        }
        _measure();
        setIsOpen(!isOpen);
        //scrollIndex();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboardHeight, isOpen, _measure, data]);
    const onSelect = (0, react_1.useCallback)((item) => {
        setValue(item);
        onChange(item);
        eventClose();
    }, [eventClose, onChange]);
    const _renderModal = (0, react_1.useCallback)(() => {
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
                return (<react_native_1.Modal transparent statusBarTranslucent visible={isOpen} supportedOrientations={['landscape', 'portrait']} onRequestClose={showOrClose}>
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
                            flexDirection: 'row',
                            marginVertical: 8,
                        }} onPress={() => {
                            onSelect(item);
                        }}>
                              <react_native_1.View style={[
                            styles.square,
                            {
                                backgroundColor: item.color,
                            },
                        ]}/>
                              <react_native_1.Text style={{ marginLeft: 4 }}>
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
    return (<react_native_1.View ref={ref} onLayout={_measure}>
        <react_native_1.TouchableWithoutFeedback onPress={showOrClose}>
          <react_native_1.View>
            {!lodash_1.default.isEmpty(title) && <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>}
            <react_native_1.View style={[styles.warperView, styles.optionView]}>
              <react_native_1.View style={{ flexDirection: 'row' }}>
                {!lodash_1.default.isEmpty(value.color) && (<react_native_1.View style={[
                styles.square,
                {
                    backgroundColor: value.color,
                    marginRight: 4,
                },
            ]}/>)}
                <react_native_1.Text>{value === null || value === void 0 ? void 0 : value.title}</react_native_1.Text>
              </react_native_1.View>
              {isOpen ? (<icons_1.ArrowTopIcon color={theme.colors.gray6}/>) : (<icons_1.ArrowBottomIcon color={theme.colors.gray6}/>)}
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.TouchableWithoutFeedback>
        {_renderModal()}
      </react_native_1.View>);
});
//# sourceMappingURL=index.js.map