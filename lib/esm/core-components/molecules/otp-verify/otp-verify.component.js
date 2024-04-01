import React, { useEffect, useRef, useState } from 'react';
import { TextInput, Dimensions, Platform, View } from 'react-native';
const HIGHT = 48;
export const OtpVerify = ({ onVerify }) => {
    const [otp, setOtp] = useState([]);
    const [otpIndex, setOtpIndex] = useState([]);
    const otpTextInput = useRef([]);
    useEffect(() => {
        otpTextInput.current[0].focus();
    }, []);
    const focusPrevious = (key, index) => {
        if (key === 'Backspace' && index !== 0) {
            otpTextInput.current[index - 1].focus();
            otpIndex.splice(otpIndex.length - 1, 1);
            setOtpIndex(otpIndex);
        }
    };
    const focusNext = (index, value) => {
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
    };
    const inputs = Array(4).fill(0);
    return (<>
      <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginVertical: 10,
            backgroundColor: 'black',
            width: Dimensions.get('screen').width - 160,
        }}>
        {inputs === null || inputs === void 0 ? void 0 : inputs.map((i, j) => (<TextInput key={j.toString()} style={{
                width: HIGHT,
                height: HIGHT,
                borderRadius: HIGHT / 2,
                backgroundColor: otpIndex.length > j ? '#3F4957' : '#000000',
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                textAlignVertical: 'top',
                paddingTop: Platform.OS === 'ios' ? 0 : 10,
                paddingBottom: 0,
            }} keyboardType="numeric" onChangeText={v => focusNext(j, v)} onKeyPress={e => focusPrevious(e.nativeEvent.key, j)} ref={r => {
                otpTextInput.current[j] = r;
            }}/>))}
      </View>
    </>);
};
//# sourceMappingURL=otp-verify.component.js.map