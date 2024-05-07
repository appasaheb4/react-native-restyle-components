"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const stepper_component_1 = require("./stepper.component");
const StepperGradientMeta = {
    title: 'Design System/Molecules/StepperGradient',
    component: stepper_component_1.StepperGradient,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
};
exports.default = StepperGradientMeta;
exports.Basic = {
    args: {
        active: 1,
        colors: ['#0687B4', '#D92CC1'],
        stepperSize: 14,
        content: ['Your Cart', 'About You', 'Payment'],
    },
};
//# sourceMappingURL=stepper.stories.js.map