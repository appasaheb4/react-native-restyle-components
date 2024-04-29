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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const theme1_1 = require("../../../theme1");
const style_1 = __importDefault(require("./style"));
const CheckBox = ({ title = '', value = '', list = [], onChange, }) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, style_1.default)(theme);
    const [options, setOptions] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setOptions(!lodash_1.default.isEmpty(value)
            ? list.map(e => {
                if (e.title == value)
                    return Object.assign(Object.assign({}, e), { selected: true });
                else
                    return Object.assign(Object.assign({}, e), { selected: false });
            })
            : list);
    }, [list]);
    return (<react_native_1.View>
      {!lodash_1.default.isEmpty(title) && <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>}
      <react_native_1.View>
        {options === null || options === void 0 ? void 0 : options.map((item, index) => (<react_native_1.TouchableOpacity key={index} style={{
                flexDirection: 'row',
                marginVertical: 6,
                alignItems: 'center',
            }} onPress={() => {
                const result = options.map(e => {
                    if (e.title == item.title)
                        return Object.assign(Object.assign({}, e), { selected: true });
                    else
                        return Object.assign(Object.assign({}, e), { selected: false });
                });
                setOptions(JSON.parse(JSON.stringify(result)));
                onChange(result.find(item => item.selected));
            }}>
            <react_native_1.View style={[
                styles.radioCycle,
                {
                    backgroundColor: item.selected
                        ? theme.colors.primary
                        : 'transparent',
                    borderWidth: item.selected ? 0 : 1,
                },
            ]}/>
            <react_native_1.Text style={{ marginLeft: 6, color: '#4A4A4A' }}>{item.title}</react_native_1.Text>
          </react_native_1.TouchableOpacity>))}
      </react_native_1.View>
    </react_native_1.View>);
};
exports.CheckBox = CheckBox;
//# sourceMappingURL=check-box-component.js.map