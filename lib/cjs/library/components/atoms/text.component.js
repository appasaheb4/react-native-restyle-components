"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextRN = exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const restyle_1 = require("@shopify/restyle");
const textVariants = (0, restyle_1.createVariant)({ themeKey: 'textVariants' });
const restyleFunctions = [
    textVariants,
    restyle_1.spacing,
    restyle_1.color,
    restyle_1.opacity,
    restyle_1.visible,
    restyle_1.typography,
    restyle_1.spacingShorthand,
    restyle_1.textShadow,
];
const Text = (_a) => {
    var { testID, children } = _a, rest = __rest(_a, ["testID", "children"]);
    const props = (0, restyle_1.useRestyle)(restyleFunctions, rest);
    return (<react_native_1.Text allowFontScaling={false} {...props} testID={testID}>
      {children}
    </react_native_1.Text>);
};
exports.Text = Text;
const TextRN = (_a) => {
    var { testID, style, children } = _a, rest = __rest(_a, ["testID", "style", "children"]);
    const props = (0, restyle_1.useRestyle)(restyleFunctions, rest);
    return (<react_native_1.Text allowFontScaling={false} {...props} testID={testID} style={style}>
      {children}
    </react_native_1.Text>);
};
exports.TextRN = TextRN;
//# sourceMappingURL=text.component.js.map