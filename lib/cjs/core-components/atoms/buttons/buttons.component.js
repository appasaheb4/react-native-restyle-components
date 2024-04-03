"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const theme1_1 = require("@/theme1");
const styles_1 = __importDefault(require("./styles"));
const Button = ({ title = '', titleStyle, buttonStyle, isDisabled = false, onPress, }) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, styles_1.default)(theme);
    const buttonStyling = () => {
        return Object.assign(Object.assign({}, buttonStyle), { opacity: isDisabled ? 0.7 : 1 });
    };
    return (<react_native_1.TouchableOpacity activeOpacity={isDisabled ? 1 : 0.7} onPress={() => !isDisabled && onPress()} disabled={isDisabled} style={[styles.buttonStyle, buttonStyling()]}>
      <react_native_1.Text style={[styles.titleStyle, titleStyle]}>{title}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
};
exports.Button = Button;
//# sourceMappingURL=buttons.component.js.map