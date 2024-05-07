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
exports.SectionListItem = void 0;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const theme1_1 = require("../../../theme1");
const styles_1 = __importDefault(require("./styles"));
const SectionListItem = ({ data = [], onChange, }) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, styles_1.default)(theme);
    const [section, setSection] = (0, react_1.useState)([
        {
            title: 'Today, Thursday, May 5',
            key: 'May 5',
            data: [
                {
                    key: 'time',
                    list: [{ title: '10:30 AM' }, { title: '11:30 AM' }, { title: '12:30 PM' }],
                },
            ],
        },
        {
            title: 'Friday, May 6',
            key: 'May 6',
            data: [
                {
                    key: 'time',
                    list: [
                        { title: '10:30 AM' },
                        { title: '11:30 AM' },
                        { title: '12:30 PM' },
                        { title: '01:30 PM' },
                    ],
                },
            ],
        },
        {
            title: 'Saturday, May 7',
            key: 'May 7',
            data: [{ key: 'time', list: [] }],
        },
        {
            title: 'Sunday, May 8',
            data: [
                {
                    key: 'time',
                    list: [{ title: '10:30 AM' }, { title: '11:30 AM' }, { title: '12:30 PM' }],
                },
            ],
        },
    ]);
    (0, react_1.useEffect)(() => {
        if ((data === null || data === void 0 ? void 0 : data.length) > 0)
            setSection(data);
    }, data);
    const renderSection = (sectionItem, { list }) => {
        return (<>
        {(list === null || list === void 0 ? void 0 : list.length) > 0 ? (<react_native_1.FlatList data={list} numColumns={3} columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between',
                }} contentContainerStyle={{ paddingBottom: 30 }} renderItem={({ item, index }) => (<react_native_1.TouchableOpacity style={[
                        styles.listItemWrapper,
                        {
                            backgroundColor: (item === null || item === void 0 ? void 0 : item.selected)
                                ? theme.colors.orange
                                : theme.colors.white,
                        },
                    ]} onPress={() => {
                        const list = section.map(o => {
                            var _a, _b, _c;
                            if (o.title == sectionItem.title) {
                                const info = o;
                                info.data[0] = Object.assign(Object.assign({}, info.data[0]), { list: (_b = (_a = o.data[0]) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.map(e => {
                                        if (e.title == item.title)
                                            return Object.assign(Object.assign({}, e), { selected: true });
                                        else
                                            return Object.assign(Object.assign({}, e), { selected: false });
                                    }) });
                                return info;
                            }
                            else
                                return Object.assign(Object.assign({}, o), { data: (_c = o.data) === null || _c === void 0 ? void 0 : _c.map((io) => {
                                        var _a;
                                        return Object.assign(Object.assign({}, io), { list: (_a = io.list) === null || _a === void 0 ? void 0 : _a.map((il) => {
                                                return Object.assign(Object.assign({}, il), { selected: false });
                                            }) });
                                    }) });
                        });
                        let selectedItem = list.map(item => {
                            var _a, _b, _c, _d;
                            if ((_b = (_a = item.data[0]) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.find((inItem) => inItem.selected))
                                return Object.assign(Object.assign({}, item), { data: Object.assign(Object.assign({}, item.data[0]), { list: (_d = (_c = item.data[0]) === null || _c === void 0 ? void 0 : _c.list) === null || _d === void 0 ? void 0 : _d.find((inItem) => inItem.selected) }) });
                        });
                        selectedItem = lodash_1.default.without(selectedItem, undefined);
                        onChange(selectedItem[0]);
                        setSection(list);
                    }}>
                <react_native_1.Text>{item === null || item === void 0 ? void 0 : item.title}</react_native_1.Text>
              </react_native_1.TouchableOpacity>)} ListFooterComponent={() => (<>
                <react_native_1.View style={styles.bottomSeparateView}/>
              </>)} keyExtractor={item => `basicListEntry-${item}`}/>) : (<react_native_1.Text style={styles.emptyText}>No Availability</react_native_1.Text>)}
      </>);
    };
    return (<react_native_1.View>
      <react_native_1.SectionList sections={section} renderItem={({ section, item }) => renderSection(section, item)} renderSectionHeader={({ section }) => (<react_native_1.Text style={styles.title}>{section.title}</react_native_1.Text>)} keyExtractor={item => `time-${item === null || item === void 0 ? void 0 : item.key}`}/>
    </react_native_1.View>);
};
exports.SectionListItem = SectionListItem;
//# sourceMappingURL=index.js.map