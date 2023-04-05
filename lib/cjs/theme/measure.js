"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.measure = void 0;
const utils_1 = require("../library/utils");
const react_native_1 = require("react-native");
const DOCUMENT_WIDTH = 380;
const scaler = new utils_1.Scaler(DOCUMENT_WIDTH);
exports.measure = {
    GUTTER: scaler.getScaledValue(10),
    ISTABLET: react_native_1.Dimensions.get('window').width / react_native_1.Dimensions.get('window').height > 0.6,
    FONT_SIZE: {
        SMALL: scaler.getScaledValue(7),
        REGULAR: scaler.getScaledValue(8),
        MEDIUM: scaler.getScaledValue(10),
        LARGE: scaler.getScaledValue(14),
        XLARGE: scaler.getScaledValue(18),
    },
    SCALER: scaler,
    WINDOW: {
        WIDTH: react_native_1.Dimensions.get('window').width,
        HEIGHT: react_native_1.Dimensions.get('window').height,
    },
    SIZE: {
        MEDIUMSMALL: scaler.getScaledValue(7),
        REGULAR: scaler.getScaledValue(8),
        MEDIUM: scaler.getScaledValue(10),
        LARGE: scaler.getScaledValue(14),
        XLARGE: scaler.getScaledValue(18),
    },
};
//# sourceMappingURL=measure.js.map