"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperGradient = void 0;
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable import/prefer-default-export */
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const __1 = require("../..");
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const StepperGradient = ({ active = 1, content = [], colors = ['#8330BA', '#C700B1'], height = 60, stepperSize = 10, }) => {
    return (<__1.Box flexDirection="row" alignItems="center" justifyContent="space-between" marginVertical="md">
      <react_native_linear_gradient_1.default style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height,
            borderRadius: 5,
            flexDirection: 'row',
            paddingHorizontal: 30,
        }} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.5, 0.6]} colors={colors}>
        <react_native_1.Text>HI hello</react_native_1.Text>
      </react_native_linear_gradient_1.default>
    </__1.Box>);
};
exports.StepperGradient = StepperGradient;
//# sourceMappingURL=stepper.component.js.map