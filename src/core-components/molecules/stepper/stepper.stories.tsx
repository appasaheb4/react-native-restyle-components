import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {StepperGradient} from './stepper.component';

const StepperGradientMeta: Meta<typeof StepperGradient> = {
  title: 'Design System/Molecules/StepperGradient',
  component: StepperGradient,
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    componentSubtitle: `import { StepperGradient } from 'react-native-restyle-components'`,
  },
};

export default StepperGradientMeta;
export const Basic: StoryObj<typeof StepperGradientMeta> = {
  args: {
    active: 1,
    colors: ['#0687B4', '#D92CC1'],
    stepperSize: 14,
    content: ['Your Cart', 'About You', 'Payment'],
  },
};