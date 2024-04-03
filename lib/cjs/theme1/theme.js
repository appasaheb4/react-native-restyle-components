"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const _1 = require("./");
exports.ThemeContext = (0, react_1.createContext)({
    isDark: false,
    colors: _1.Colors.light,
    typography: _1.Typography.light,
});
const ThemeProvider = (props) => {
    const colorScheme = (0, react_native_1.useColorScheme)();
    const isDark = colorScheme === 'dark';
    const defaultTheme = {
        isDark,
        colors: isDark ? _1.Colors.dark : _1.Colors.light,
        typography: isDark ? _1.Typography.dark : _1.Typography.light,
    };
    return (<exports.ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </exports.ThemeContext.Provider>);
};
exports.ThemeProvider = ThemeProvider;
const useTheme = () => (0, react_1.useContext)(exports.ThemeContext);
exports.useTheme = useTheme;
//# sourceMappingURL=theme.js.map