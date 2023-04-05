"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightOrDark = exports.Scaler = void 0;
const react_native_1 = require("react-native");
class Scaler {
    constructor(documentWidth) {
        const { scale, width } = react_native_1.Dimensions.get('window');
        this.windowWidth = width * scale;
        this.windowWidth = this.windowWidth > 1200 ? 1200 : this.windowWidth;
        this.documentWidth = (documentWidth * react_native_1.PixelRatio.get()) / 2;
    }
    getScaledValue(value) {
        return react_native_1.PixelRatio.roundToNearestPixel((value * this.windowWidth) / this.documentWidth);
    }
}
exports.Scaler = Scaler;
function lightOrDark(color) {
    // Variables for red, green, blue values
    let r;
    let g;
    let b;
    let hsp;
    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        let value = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        if (value == null) {
            value = ['0', '0', '0'];
        }
        r = parseInt(value[1]);
        g = parseInt(value[2]);
        b = parseInt(value[3]);
    }
    else {
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
exports.lightOrDark = lightOrDark;
//# sourceMappingURL=scaler.js.map