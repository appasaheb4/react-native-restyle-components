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
exports.DropDownList = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const theme1_1 = require("../../../theme1");
const style_1 = __importDefault(require("./style"));
const icons_1 = require("../../../library/assets/icons");
const DropDownList = ({ title = '', list = [], displayKey = '', onChange, }) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, style_1.default)(theme);
    const [value, setValue] = (0, react_1.useState)('Select');
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [optionList, setOptionList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setOptionList(list);
    }, [list]);
    return (<react_native_1.View>
      {!lodash_1.default.isEmpty(title) && <react_native_1.Text style={styles.text}>{title}</react_native_1.Text>}
      <react_native_1.TouchableOpacity style={styles.warperView} onPress={() => {
            setIsOpen(!isOpen);
        }}>
        <react_native_1.View style={styles.optionView}>
          <react_native_1.Text>{value}</react_native_1.Text>
          {isOpen ? (<icons_1.ArrowTopIcon color={theme.colors.gray6}/>) : (<icons_1.ArrowBottomIcon color={theme.colors.gray6}/>)}
        </react_native_1.View>
      </react_native_1.TouchableOpacity>
      {isOpen && (<react_native_1.View style={styles.flatListWarperView}>
          <react_native_1.FlatList style={styles.flatListView} data={optionList} renderItem={({ item }) => (<react_native_1.View>
                <react_native_1.TouchableOpacity style={{
                    marginVertical: 8,
                }} onPress={() => {
                    onChange(item[displayKey]);
                    setValue(item.title);
                }}>
                  <react_native_1.Text style={{ marginLeft: 2 }}>{item[displayKey]}</react_native_1.Text>
                </react_native_1.TouchableOpacity>
              </react_native_1.View>)} keyExtractor={(_item, index) => index.toString()}/>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.DropDownList = DropDownList;
//# sourceMappingURL=index.js.map