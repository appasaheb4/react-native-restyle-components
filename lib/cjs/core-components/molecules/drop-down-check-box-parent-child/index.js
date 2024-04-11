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
exports.DropDownCheckBoxParentChild = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const theme1_1 = require("../../../theme1");
const style_1 = __importDefault(require("./style"));
// import Icon from 'react-native-vector-icons/Feather';
const icons_1 = require("../../../library/assets/icons");
const DropDownCheckBoxParentChild = ({ title = '', list = [], onChange, }) => {
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
          {isOpen ? (<icons_1.ArrowTop color={theme.colors.gray6}/>) : (<icons_1.ArrowBottom color={theme.colors.gray6}/>)}
          {/* {isOpen ? (
          <Icon name="chevron-up" size={30} color="#4A4A4A" />
        ) : (
          <Icon name="chevron-down" size={30} color="#4A4A4A" />
        )} */}
        </react_native_1.View>
      </react_native_1.TouchableOpacity>
      {isOpen && (<react_native_1.View style={styles.flatListWarperView}>
          <react_native_1.FlatList style={styles.flatListView} data={optionList} renderItem={({ item, index }) => {
                var _a;
                return (<react_native_1.View>
                <react_native_1.TouchableOpacity style={{
                        flexDirection: 'row',
                        marginVertical: 6,
                        alignItems: 'center',
                    }} onPress={() => {
                        const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                            var _a;
                            let childOption = opList;
                            let isSelected = opList.selected;
                            if (opIndex == index)
                                isSelected = !opList.selected;
                            else
                                isSelected = false;
                            const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch) => {
                                return Object.assign(Object.assign({}, ch), { selected: false });
                            });
                            childOption = [
                                {
                                    [Object.keys(childOption[0])[0]]: newArr,
                                    selected: isSelected,
                                },
                            ];
                            return Object.assign(Object.assign({}, childOption), { selected: isSelected });
                        });
                        onChange(Object.keys(item[0])[0]);
                        setValue(Object.keys(item[0])[0]);
                        setOptionList(JSON.parse(JSON.stringify(list)));
                    }}>
                  <react_native_1.View style={[
                        styles.radioCycle,
                        {
                            backgroundColor: (item === null || item === void 0 ? void 0 : item.selected)
                                ? theme.colors.primary
                                : 'transparent',
                            borderWidth: (item === null || item === void 0 ? void 0 : item.selected) ? 0 : 1,
                        },
                    ]}/>
                  <react_native_1.Text style={{ marginLeft: 6 }}>{Object.keys(item[0])[0]}</react_native_1.Text>
                </react_native_1.TouchableOpacity>
                {(_a = item[0][Object.keys(item[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((e, i) => (<react_native_1.TouchableOpacity style={{
                            flexDirection: 'row',
                            marginVertical: 6,
                            alignItems: 'center',
                            marginLeft: 30,
                        }} onPress={() => {
                            const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                                var _a;
                                let childOption = opList;
                                const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch, chIndex) => {
                                    if (index == opIndex && chIndex == i)
                                        return Object.assign(Object.assign({}, ch), { selected: !ch.selected });
                                    return Object.assign(Object.assign({}, ch), { selected: false });
                                    return ch;
                                });
                                childOption = [
                                    {
                                        [Object.keys(childOption[0])[0]]: newArr,
                                        selected: false,
                                    },
                                ];
                                return childOption;
                            });
                            onChange(e.title);
                            setValue(e.title);
                            setOptionList(JSON.parse(JSON.stringify(list)));
                        }}>
                    <react_native_1.View style={[
                            styles.radioCycle,
                            {
                                backgroundColor: (e === null || e === void 0 ? void 0 : e.selected)
                                    ? theme.colors.primary
                                    : 'transparent',
                                borderWidth: (e === null || e === void 0 ? void 0 : e.selected) ? 0 : 1,
                            },
                        ]}/>
                    <react_native_1.Text style={{ marginLeft: 6 }}>{e.title}</react_native_1.Text>
                  </react_native_1.TouchableOpacity>))}
              </react_native_1.View>);
            }} keyExtractor={(_item, index) => index.toString()}/>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.DropDownCheckBoxParentChild = DropDownCheckBoxParentChild;
//# sourceMappingURL=index.js.map