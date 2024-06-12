import { View } from 'react-native';
import { OtpVerify } from './otp-verify.component';
const OtpVerifyMeta = {
    title: 'Design System/Molecules/OtpVerify',
    component: OtpVerify,
    decorators: [
        Story => (<View style={{
                flex: 1,
                width: 20,
                marginLeft: 100,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
            }}>
        <Story />
      </View>),
    ],
    parameters: {
        componentSubtitle: `import { OtpVerify } from 'react-native-restyle-components'`,
    },
};
export default OtpVerifyMeta;
export const Basic = {
    args: {
        onVerify: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=otp-verify.stories.js.map