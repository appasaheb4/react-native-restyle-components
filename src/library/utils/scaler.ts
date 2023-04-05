import {Dimensions, PixelRatio} from 'react-native';

export class Scaler {
  windowWidth: number;
  documentWidth: number;

  constructor(documentWidth: number) {
    const {scale, width} = Dimensions.get('window');
    this.windowWidth = width * scale;
    this.windowWidth = this.windowWidth > 1200 ? 1200 : this.windowWidth;
    this.documentWidth = (documentWidth * PixelRatio.get()) / 2;
  }

  getScaledValue(value: number) {
    return PixelRatio.roundToNearestPixel(
      (value * this.windowWidth) / this.documentWidth,
    );
  }
}

export function lightOrDark(color: string) {
  // Variables for red, green, blue values
  let r: number;
  let g: number;
  let b: number;
  let hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    let value: any = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    if (value == null) {
      value = ['0', '0', '0'];
    }

    r = parseInt(value[1]);
    g = parseInt(value[2]);
    b = parseInt(value[3]);
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    const value = +`0x${color
      .slice(1)
      .replace(color.length < 5 ? /./g : '', '$&$&')}`;

    r = value >> 16;
    g = (value >> 8) & 255;
    b = value & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light';
  }
  return 'dark';
}
