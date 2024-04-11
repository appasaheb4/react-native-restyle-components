"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceHelper = void 0;
const react_native_1 = require("react-native");
class DeviceHelper {
    static isIos() {
        return react_native_1.Platform.OS === 'ios';
    }
    static isAndroid() {
        return !DeviceHelper.isIos();
    }
    static calculateWidthRatio(size) {
        const widthInDesign = 414;
        return (size * this.dimensions.width) / widthInDesign;
    }
    static calculateHeightRatio(size) {
        const heightInDesign = 1069;
        return (size * this.dimensions.height) / heightInDesign;
    }
    static width() {
        return this.dimensions.width;
    }
    static height() {
        return this.dimensions.height;
    }
}
exports.DeviceHelper = DeviceHelper;
DeviceHelper.dimensions = react_native_1.Dimensions.get('window');
//# sourceMappingURL=device-helper.js.map