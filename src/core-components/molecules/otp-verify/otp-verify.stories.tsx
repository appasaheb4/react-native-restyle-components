import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {OtpVerify} from './otp-verify.component';

const OtpVerifyMeta: Meta<typeof OtpVerify> = {
  title: 'Design System/Molecules/OtpVerify',
  component: OtpVerify,
  decorators: [
    Story => (
      <View style={{flex: 1, width:20, marginLeft:100, alignItems:'center', justifyContent:'center', padding: 10}}>
        <Story />
      </View>
    ),
  ],
};
  
export default OtpVerifyMeta;
export const Basic: StoryObj<typeof OtpVerifyMeta> = {
  args: {
    onVerify: item => {
      console.log({item});
    },
  },
};
