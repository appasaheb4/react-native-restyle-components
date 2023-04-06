"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperGradient = void 0;
const react_1 = __importDefault(require("react"));
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
        {content.map((item, index) => (<>
            <__1.Box key={index}>
              <__1.Box backgroundColor={index + 1 === active ? 'white' : 'transparent'} borderColor="white" borderWidth={1} height={stepperSize} width={stepperSize} borderRadius={stepperSize / 2}/>
              <__1.TextRN color="white" fontSize={8} style={{
                position: 'absolute',
                width: 100,
                color: 'white',
                marginLeft: -20,
                marginTop: 12,
            }}>
                {item}
              </__1.TextRN>
            </__1.Box>

            {content.length !== index + 1 && (<__1.Box flex={1} backgroundColor="white" height={1} borderColor="white"/>)}
          </>))}
      </react_native_linear_gradient_1.default>
    </__1.Box>);
};
exports.StepperGradient = StepperGradient;
//# sourceMappingURL=stepper.component.js.map