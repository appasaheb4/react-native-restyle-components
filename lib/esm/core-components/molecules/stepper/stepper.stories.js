import { View } from 'react-native';
import { StepperGradient } from './stepper.component';
const StepperGradientMeta = {
    title: 'Design System/Molecules/StepperGradient',
    component: StepperGradient,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
};
export default StepperGradientMeta;
export const Basic = {
    args: {
        active: 1,
        colors: ['#0687B4', '#D92CC1'],
        stepperSize: 14,
        content: ['Your Cart', 'About You', 'Payment'],
    },
};
//# sourceMappingURL=stepper.stories.js.map