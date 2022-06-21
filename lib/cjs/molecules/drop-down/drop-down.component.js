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
exports.Dropdown = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Feather_1 = __importDefault(require("react-native-vector-icons/Feather"));
const INPUT_HEIGHT = 48;
// eslint-disable-next-line react/display-name
exports.Dropdown = react_1.default.forwardRef(({ label, displayKey = 'title', hasError, testID, data, zIndex, unSelectedItemColor = '#ffffff', selectedItemColor = '#F0EFEE', iconColor = '#000000', onSelect, }, ref) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const DropdownButton = (0, react_1.useRef)(null);
    const [value, setValue] = (0, react_1.useState)(label);
    const [options, setOptions] = (0, react_1.useState)(data);
    (0, react_1.useEffect)(() => {
        setOptions(data.filter((item) => {
            item.selected = item[displayKey] === value ? true : false;
            console.log({ item });
            return item;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, value]);
    const toggleDropdown = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        visible ? setVisible(false) : setVisible(true);
    };
    (0, react_1.useImperativeHandle)(ref, () => ({
        hidePoup() {
            setVisible(false);
        },
    }));
    const onItemPress = (item) => {
        setValue(item[displayKey]);
        onSelect(item);
        setVisible(false);
    };
    const renderItem = ({ item, index }) => (<react_native_1.TouchableOpacity style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: item.selected
                ? selectedItemColor
                : unSelectedItemColor,
            marginBottom: data.length !== index + 1 ? 4 : 0,
        }} onPress={() => onItemPress(item)}>
        <react_native_1.Text>{item[displayKey]}</react_native_1.Text>
      </react_native_1.TouchableOpacity>);
    const renderDropdown = () => {
        return (visible && (<react_native_1.View style={{
                flex: 1,
                position: 'absolute',
                top: INPUT_HEIGHT - 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 1,
                backgroundColor: 'white',
                width: '100%',
            }}>
            <react_native_1.FlatList data={options} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
          </react_native_1.View>));
    };
    return (<react_native_1.View style={{
            borderBottomWidth: 1,
            borderRadius: 5,
            borderColor: hasError ? 'red' : 'gray',
            padding: 5,
            height: INPUT_HEIGHT,
            zIndex: zIndex,
        }} testID={testID}>
        <react_native_1.TouchableOpacity ref={DropdownButton} onPress={toggleDropdown} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
        }} testID={`${testID}_CLICK`}>
          <react_native_1.Text>{value || label}</react_native_1.Text>
          {renderDropdown()}
          {visible ? (<Feather_1.default name="chevron-up" size={30} color={iconColor}/>) : (<Feather_1.default name="chevron-down" size={30} color={iconColor}/>)}
        </react_native_1.TouchableOpacity>
      </react_native_1.View>);
});
//# sourceMappingURL=drop-down.component.js.map