"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDetectDevice = void 0;
const react_native_1 = require("react-native");
const { width, height } = react_native_1.Dimensions.get('window');
const isTablet = () => {
    let pixelDensity = react_native_1.PixelRatio.get();
    const adjustedWidth = width * pixelDensity;
    const adjustedHeight = height * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    }
    else {
        return (pixelDensity === 2 && (adjustedWidth >= 1824 || adjustedHeight >= 1824));
    }
};
const useDetectDevice = {
    isAndroid: react_native_1.Platform.OS === 'android',
    isIOS: react_native_1.Platform.OS === 'ios',
    isTablet: isTablet(),
};
exports.useDetectDevice = useDetectDevice;
//# sourceMappingURL=index.js.map