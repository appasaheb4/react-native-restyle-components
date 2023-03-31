"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineAwesome = exports.LineAwesomeIconSet = void 0;
const react_1 = __importDefault(require("react"));
const react_native_vector_icons_1 = require("react-native-vector-icons");
const glyphMapLineawesome = require('../../assets/glyphmaps/LineAwesome.json');
exports.LineAwesomeIconSet = (0, react_native_vector_icons_1.createIconSet)(glyphMapLineawesome, 'lineawesome', 'LineAwesome.ttf');
const LineAwesome = ({ icon, size = 20, color = 'black' }) => (<exports.LineAwesomeIconSet name={icon} size={size} color={color.toString()}/>);
exports.LineAwesome = LineAwesome;
//# sourceMappingURL=Icons.js.map