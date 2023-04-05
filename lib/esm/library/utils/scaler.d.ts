export declare class Scaler {
    windowWidth: number;
    documentWidth: number;
    constructor(documentWidth: number);
    getScaledValue(value: number): number;
}
export declare function lightOrDark(color: string): "light" | "dark";
