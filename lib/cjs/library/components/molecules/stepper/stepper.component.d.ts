/// <reference types="react" />
interface StepperGradientProps {
    active: number;
    content: Array<string>;
    colors?: Array<string>;
    height?: number;
    stepperSize: number;
}
export declare const StepperGradient: ({ active, content, colors, height, stepperSize, }: StepperGradientProps) => JSX.Element;
export {};
