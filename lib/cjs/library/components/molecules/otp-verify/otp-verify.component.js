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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpVerify = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const HIGHT = 48;
const OtpVerify = ({ onVerify }) => {
    const [otp, setOtp] = (0, react_1.useState)([]);
    const [otpIndex, setOtpIndex] = (0, react_1.useState)([]);
    const otpTextInput = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(() => {
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
        console.log({ len: otpIndex.length });
    };
    const inputs = Array(4).fill(0);
    return (<>
      <react_native_1.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginVertical: 10,
            width: react_native_1.Dimensions.get('screen').width - 160,
        }}>
        {inputs.map((i, j) => (<react_native_1.TextInput key={j.toString()} style={{
                width: HIGHT,
                height: HIGHT,
                borderRadius: HIGHT / 2,
                backgroundColor: otpIndex.length > j ? '#3F4957' : '#000000',
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                textAlignVertical: 'top',
                paddingTop: react_native_1.Platform.OS === 'ios' ? 0 : 10,
                paddingBottom: 0,
            }} keyboardType="numeric" onChangeText={v => focusNext(j, v)} onKeyPress={e => focusPrevious(e.nativeEvent.key, j)} ref={r => {
                otpTextInput.current[j] = r;
            }}/>))}
      </react_native_1.View>
    </>);
};
exports.OtpVerify = OtpVerify;
//# sourceMappingURL=otp-verify.component.js.map