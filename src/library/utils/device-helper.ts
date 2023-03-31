import {Dimensions, Platform} from 'react-native';

export class DeviceHelper {
  static dimensions = Dimensions.get('window');
  static isIos(): boolean {
    return Platform.OS === 'ios';
  }

  static isAndroid(): boolean {
    return !DeviceHelper.isIos();
  }

  static calculateWidthRatio(size: number): number {
    const widthInDesign = 414;
    return (size * this.dimensions.width) / widthInDesign;
  }

  static calculateHeightRatio(size: number): number {
    const heightInDesign = 1069;
    return (size * this.dimensions.height) / heightInDesign;
  }

  static width(): number {
    return this.dimensions.width;
  }

  static height(): number {
    return this.dimensions.height;
  }
}
