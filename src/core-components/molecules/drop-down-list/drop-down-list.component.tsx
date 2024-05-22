import _ from 'lodash';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  FlatList,
  I18nManager,
  Keyboard,
  KeyboardEvent,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDetectDevice} from '../../../utils/toolkits';
import {useDeviceOrientation} from '../../../utils/useDeviceOrientation';
import {useTheme} from '../../../theme1';
import styleSheet from './styles';
import {ArrowBottomIcon, ArrowTopIcon} from '../../../library/assets/icons';

const {isTablet} = useDetectDevice;
const statusBarHeight: number = StatusBar.currentHeight || 0;

interface DropDownListProps {
  displayValue?: string;
  title: string;
  displayKey: string;
  testID?: string;
  onChange: (item: any) => void;
  containerStyle?: string;
  data: Array<any>;
  valueField?: any;
  search?: boolean;
  maxHeight?: number;
  minHeight?: number;
  disable?: boolean;
  keyboardAvoiding?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  autoScroll?: boolean;
  dropdownPosition?: string;
  backgroundColor?: string;
  accessibilityLabel?: string;
  mode?: string;
}

export const DropDownList = React.forwardRef(
  (
    {
      displayValue = 'Select',
      title = '',
      displayKey = 'title',
      testID,
      onChange,
      containerStyle,
      data = [],
      valueField,
      search = false,
      maxHeight = 340,
      minHeight = 0,
      disable = false,
      keyboardAvoiding = true,
      onFocus,
      onBlur,
      autoScroll = true,
      dropdownPosition = 'auto',
      backgroundColor,
      accessibilityLabel,
      mode = 'default',
    }: DropDownListProps,
    currentRef,
  ) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState(displayValue);
    const orientation = useDeviceOrientation();
    const ref = useRef<View>(null);
    const refList = useRef<FlatList>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [listData, setListData] = useState<any[]>(data);
    const [position, setPosition] = useState<any>();
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
    const [optionList, setOptionList] = useState<Array<any>>([]);

    useEffect(() => {
      setOptionList(data);
    }, [data]);

    useEffect(() => {
      setValue(displayValue);
    }, [displayValue]);

    const {width: W, height: H} = Dimensions.get('window');
    const styleContainerVertical: ViewStyle = useMemo(() => {
      return {
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
      };
    }, []);
    const styleHorizontal: ViewStyle = useMemo(() => {
      return {
        width: orientation === 'LANDSCAPE' ? W / 2 : '100%',
        alignSelf: 'center',
      };
    }, [W, orientation]);

    useImperativeHandle(currentRef, () => {
      return {open: eventOpen, close: eventClose};
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

    const onKeyboardDidShow = useCallback(
      (e: KeyboardEvent) => {
        _measure();
        setKeyboardHeight(e.endCoordinates.height);
      },
      [_measure],
    );

    const onKeyboardDidHide = useCallback(() => {
      setKeyboardHeight(0);
      _measure();
    }, [_measure]);

    useEffect(() => {
      const susbcriptionKeyboardDidShow = Keyboard.addListener(
        'keyboardDidShow',
        onKeyboardDidShow,
      );
      const susbcriptionKeyboardDidHide = Keyboard.addListener(
        'keyboardDidHide',
        onKeyboardDidHide,
      );

      return () => {
        if (typeof susbcriptionKeyboardDidShow?.remove === 'function') {
          susbcriptionKeyboardDidShow.remove();
        }

        if (typeof susbcriptionKeyboardDidHide?.remove === 'function') {
          susbcriptionKeyboardDidHide.remove();
        }
      };
    }, [onKeyboardDidHide, onKeyboardDidShow]);

    const getValue = useCallback(() => {
      const defaultValue =
        typeof value === 'object' ? _.get(value, valueField) : value;

      const getItem = data.filter(e =>
        _.isEqual(defaultValue, _.get(e, valueField)),
      );
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
        } else {
          if (onBlur) {
            onBlur();
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disable, keyboardHeight, visible, _measure, data, onFocus, onBlur]);

    const onSelect = useCallback(
      (item: any) => {
        setValue(item[displayKey]);
        onChange(item);
        eventClose();
      },
      [eventClose, onChange],
    );

    const _renderDropdown = () => {
      return (
        <TouchableWithoutFeedback
          testID={testID}
          accessible={!!accessibilityLabel}
          accessibilityLabel={accessibilityLabel}
          onPress={showOrClose}
          disabled={disable}>
          <View style={styles.dropdown}>
            {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
            <View style={[styles.warperView, styles.optionView]}>
              <Text>{value}</Text>
              {visible ? (
                <ArrowTopIcon color={theme.colors.gray6} />
              ) : (
                <ArrowBottomIcon color={theme.colors.gray6} />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    };

    const _renderModal = useCallback(() => {
      if (visible && position) {
        const {isFull, width, height, top, bottom, left} = position;
        const onAutoPosition = () => {
          if (keyboardHeight > 0) {
            return bottom < keyboardHeight + height;
          }

          return bottom < (search ? 150 : 100);
        };
        if (width && top && bottom) {
          const styleVertical: ViewStyle = {
            left: left,
            maxHeight: maxHeight,
            minHeight: minHeight,
          };
          const isTopPosition =
            dropdownPosition === 'auto'
              ? onAutoPosition()
              : dropdownPosition === 'top';

          let keyboardStyle: ViewStyle = {};

          let extendHeight = !isTopPosition ? top : bottom;
          if (
            keyboardAvoiding &&
            keyboardHeight > 0 &&
            isTopPosition &&
            dropdownPosition === 'auto'
          ) {
            extendHeight = keyboardHeight;
          }
          return (
            <Modal
              transparent
              statusBarTranslucent
              visible={visible}
              supportedOrientations={['landscape', 'portrait']}
              onRequestClose={showOrClose}>
              <TouchableWithoutFeedback onPress={showOrClose}>
                <View
                  style={StyleSheet.flatten([
                    styles.flex1,
                    isFull && styleContainerVertical,
                    backgroundColor && {backgroundColor: backgroundColor},
                    keyboardStyle,
                  ])}>
                  <View
                    style={StyleSheet.flatten([
                      styles.flex1,
                      !isTopPosition
                        ? {paddingTop: extendHeight}
                        : {
                            justifyContent: 'flex-end',
                            paddingBottom: extendHeight,
                          },
                      isFull && styles.fullScreen,
                    ])}>
                    <View
                      style={StyleSheet.flatten([
                        styles.container,
                        isFull ? styleHorizontal : styleVertical,
                        {
                          width,
                        },
                        containerStyle,
                      ])}>
                      <FlatList
                        testID={testID + ' flatlist'}
                        accessibilityLabel={accessibilityLabel + ' flatlist'}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{paddingBottom: 20}}
                        style={styles.flatListView}
                        data={optionList}
                        renderItem={({
                          item,
                          index,
                        }: {
                          item: any;
                          index: number;
                        }) => (
                          <View key={index?.toString()}>
                            <TouchableOpacity
                              style={{
                                marginVertical: 8,
                              }}
                              onPress={() => {
                                onSelect(item);
                              }}>
                              <Text style={[styles.text, {marginLeft: 2}]}>
                                {item[displayKey]}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                        keyExtractor={(_item, index) => index.toString()}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          );
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
    return (
      <View ref={ref} onLayout={_measure}>
        {_renderDropdown()}
        {_renderModal()}
      </View>
    );
  },
);
