import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  StatusBar,
  I18nManager,
  Dimensions,
  ViewStyle,
  Keyboard,
  KeyboardEvent,
  TouchableOpacity,
} from 'react-native';
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './style';
import {ArrowBottomIcon, ArrowTopIcon} from '../../../library/assets/icons';
import {useDetectDevice} from '../../../utils/toolkits';
import {useDeviceOrientation} from '../../../utils/useDeviceOrientation';

const {isTablet} = useDetectDevice;
const statusBarHeight: number = StatusBar.currentHeight || 0;

export interface DropDownPriorityListProps {
  title?: string;
  data: Array<any>;
  displayKey: string;
  testID?: string;
  mode?: string;
  maxHeight?: number;
  minHeight?: number;
  search?: boolean;
  dropdownPosition?: string;
  keyboardAvoiding?: boolean;
  backgroundColor?: string;
  containerStyle?: string;
  accessibilityLabel?: string;
  onChange: (item: any) => void;
}

export const DropDownPriorityList = React.forwardRef(
  (
    {
      title = '',
      data = [],
      displayKey = '',
      testID,
      mode = 'default',
      maxHeight = 340,
      minHeight = 0,
      search = false,
      dropdownPosition = 'auto',
      keyboardAvoiding = true,
      backgroundColor,
      containerStyle,
      accessibilityLabel,
      onChange,
    }: DropDownPriorityListProps,
    currentRef,
  ) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const ref = useRef<View>(null);
    const [value, setValue] = useState({color: '', title: 'Select'});
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState<Array<any>>([]);
    const [position, setPosition] = useState<any>();
    const orientation = useDeviceOrientation();

    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

    useEffect(() => {
      setOptionList(data);
    }, [data]);

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
      return {open: eventOpen, close: eventClose};
    });

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

    const showOrClose = useCallback(() => {
      if (keyboardHeight > 0 && isOpen) {
        return Keyboard.dismiss();
      }
      _measure();
      setIsOpen(!isOpen);
      //scrollIndex();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyboardHeight, isOpen, _measure, data]);

    const onSelect = useCallback(
      (item: any) => {
        setValue(item);
        onChange(item);
        eventClose();
      },
      [eventClose, onChange],
    );

    const _renderModal = useCallback(() => {
      if (isOpen && position) {
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
              visible={isOpen}
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
                        style={styles.flatListView}
                        data={optionList}
                        renderItem={({item}: {item: any}) => (
                          <View>
                            <TouchableOpacity
                              style={{
                                flexDirection: 'row',
                                marginVertical: 8,
                              }}
                              onPress={() => {
                                onSelect(item);
                              }}>
                              <View
                                style={[
                                  styles.square,
                                  {
                                    backgroundColor: item.color,
                                  },
                                ]}
                              />
                              <Text style={{marginLeft: 4}}>
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

    return (
      <View ref={ref} onLayout={_measure}>
        <TouchableWithoutFeedback onPress={showOrClose}>
          <View>
            {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
            <View style={[styles.warperView, styles.optionView]}>
              <View style={{flexDirection: 'row'}}>
                {!_.isEmpty(value.color) && (
                  <View
                    style={[
                      styles.square,
                      {
                        backgroundColor: value.color,
                        marginRight: 4,
                      },
                    ]}
                  />
                )}
                <Text>{value?.title}</Text>
              </View>
              {isOpen ? (
                <ArrowTopIcon color={theme.colors.gray6} />
              ) : (
                <ArrowBottomIcon color={theme.colors.gray6} />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        {_renderModal()}
      </View>
    );
  },
);
