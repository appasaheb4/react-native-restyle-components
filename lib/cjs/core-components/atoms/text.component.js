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
const theme_1 = require("../../theme");
const RestyleText = (0, restyle_1.createRestyleComponent)([...theme_1.allRestyleFunctions, (0, restyle_1.createVariant)({ themeKey: 'textVariants' })], react_native_1.Text);
function Text(_a) {
    var { children, variant } = _a, rest = __rest(_a, ["children", "variant"]);
    return (<RestyleText variant={variant !== null && variant !== void 0 ? variant : 'bodyText'} {...rest}>
      {children}
    </RestyleText>);
}
exports.Text = Text;
const TextRN = ({ testID, style, children, }) => {
    return (<react_native_1.Text allowFontScaling={false} testID={testID} style={style}>
      {children}
    </react_native_1.Text>);
};
exports.TextRN = TextRN;
//# sourceMappingURL=text.component.js.map