"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const otp_verify_component_1 = require("./otp-verify.component");
const OtpVerifyMeta = {
    title: 'Design System/Molecules/OtpVerify',
    component: otp_verify_component_1.OtpVerify,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, width: 20, marginLeft: 100, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
};
exports.default = OtpVerifyMeta;
exports.Basic = {
    args: {
        onVerify: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=otp-verify.stories.js.map