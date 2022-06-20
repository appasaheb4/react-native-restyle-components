import React, {useEffect, useRef, useState} from 'react';
import {TextInput, Dimensions, Platform, View} from 'react-native';

interface OtpVerifyProps {
  onVerify: (otp: string) => void;
}

const HIGHT = 48;

export const OtpVerify = ({onVerify}: OtpVerifyProps): JSX.Element => {
  const [otp, setOtp] = useState<Array<string>>([]);
  const [otpIndex, setOtpIndex] = useState<Array<number>>([]);
  const otpTextInput = useRef<TextInput[] | null[] | any>([]);

  useEffect(() => {
    otpTextInput.current[0].focus();
  }, []);

  const focusPrevious = (key: any, index: number) => {
    if (key === 'Backspace' && index !== 0) {
      otpTextInput.current[index - 1].focus();
      otpIndex.splice(otpIndex.length - 1, 1);
      setOtpIndex(otpIndex);
    }
  };

  const focusNext = (index: number, value: string) => {
    if (index < otpTextInput.current.length - 1 && value) {
      otpTextInput.current[index + 1].focus();
    }
    if (index === otpTextInput.current.length - 1) {
      otpTextInput.current[index].blur();
      onVerify(otp.concat(value).join(''));
    }
    if (value !== '') {
      setOtpIndex(otpIndex.concat(index));
    }
    otp[index] = value;
    setOtp(otp);
    console.log({len: otpIndex.length});
  };

  const inputs = Array(4).fill(0);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          width: Dimensions.get('screen').width - 160,
        }}>
        {inputs.map((i: number, j: number) => (
          <TextInput
            key={j.toString()}
            style={{
              width: HIGHT,
              height: HIGHT,
              borderRadius: HIGHT / 2,
              backgroundColor: otpIndex.length > j ? '#3F4957' : '#ffffff',
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              textAlignVertical: 'top',
              paddingTop: Platform.OS === 'ios' ? 0 : 10,
              paddingBottom: 0,
            }}
            keyboardType="numeric"
            onChangeText={v => focusNext(j, v)}
            onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
            ref={r => {
              otpTextInput.current[j] = r;
            }}
          />
        ))}
      </View>
    </>
  );
};
