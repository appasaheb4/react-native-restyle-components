import React, {useRef} from 'react';
import {View, PanResponder} from 'react-native';
import {
  OtpVerify,
  Dropdown,
  StepperGradient,
} from 'react-native-restyle-components';

const App = () => {
  const productTypeRef = useRef<any>();
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: (evt: any) => {
        const inst = evt._targetInst;
        console.log({inst});

        if (Array.isArray(inst?.memoizedProps?.children)) {
          productTypeRef.current?.hidePoup();
        }
        return false;
      },
    }),
  ).current;

  return (
    <View style={{flex: 1, marginTop: 44}} {...panResponder.panHandlers}>
      <OtpVerify
        onVerify={otp => {
          console.log({otp});
        }}
      />
      <View style={{marginTop: 40}} />
      <Dropdown
        ref={productTypeRef}
        label={'Product Type'}
        onSelect={item => {
          console.log({item});
        }}
        data={[
          {label: 'tech abl', value: 'tech abl'},
          {label: 'github.com/appasaheb4', value: 'github.com/appasaheb4'},
        ]}
        displayKey="label"
        testID="PROD-TYPE"
        zIndex={1}
      />
      <StepperGradient
        active={1}
        colors={['#0687B4', '#D92CC1']}
        stepperSize={14}
        content={['Your Cart', 'About You', 'Payment']}
      />
    </View>
  );
};

export default App;
