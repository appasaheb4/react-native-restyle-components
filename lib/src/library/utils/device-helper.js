import { Dimensions, Platform } from 'react-native';
export class DeviceHelper {
    static dimensions = Dimensions.get('window');
    static isIos() {
        return Platform.OS === 'ios';
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
