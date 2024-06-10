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
const SectionListItem = ({ data = [], isStickySectionHeadersEnabled = true, onChange, }) => {
    const theme = (0, theme1_1.useTheme)();
    const styles = (0, styles_1.default)(theme);
    const [section, setSection] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        console.log({ data });
        setSection(data);
    }, [data]);
    const screenWidth = react_native_1.Dimensions.get('window').width;
    const numColumns = 3;
    const gap = 14;
    const availableSpace = screenWidth - 80;
    const itemSize = availableSpace / numColumns;
    const lastItem = react_1.default.useMemo(() => {
        const last = section[section.length - 1];
        if (!lodash_1.default.isEmpty(last)) {
            return last;
        }
        return false;
    }, [section]);
    const renderSection = (sectionItem, { list }) => {
        return (<react_native_1.View>
        {(list === null || list === void 0 ? void 0 : list.length) > 0 ? (<react_native_1.FlatList data={list} numColumns={numColumns} style={{
                    marginBottom: (lastItem === null || lastItem === void 0 ? void 0 : lastItem.title) == (sectionItem === null || sectionItem === void 0 ? void 0 : sectionItem.title) ? 40 : 0,
                }} contentContainerStyle={{
                    gap,
                }} columnWrapperStyle={{ gap, marginBottom: 10 }} renderItem={({ item, index }) => (<react_native_1.TouchableOpacity style={[
                        styles.listItemWrapper,
                        {
                            backgroundColor: (item === null || item === void 0 ? void 0 : item.selected)
                                ? theme.colors.orange
                                : theme.colors.white,
                            width: itemSize,
                            marginBottom: gap - 8,
                        },
                    ]} onPress={() => {
                        const list = section.map((o) => {
                            var _a, _b, _c;
                            if (o.title == sectionItem.title) {
                                const info = o;
                                info.data[0] = Object.assign(Object.assign({}, info.data[0]), { list: (_b = (_a = o.data[0]) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.map((e) => {
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
                        let selectedItem = list.map((item) => {
                            var _a, _b, _c, _d;
                            if ((_b = (_a = item.data[0]) === null || _a === void 0 ? void 0 : _a.list) === null || _b === void 0 ? void 0 : _b.find((inItem) => inItem.selected))
                                return Object.assign(Object.assign({}, item), { data: Object.assign(Object.assign({}, item.data[0]), { list: (_d = (_c = item.data[0]) === null || _c === void 0 ? void 0 : _c.list) === null || _d === void 0 ? void 0 : _d.find((inItem) => inItem.selected) }) });
                        });
                        selectedItem = lodash_1.default.without(selectedItem, undefined);
                        onChange(selectedItem[0]);
                        setSection(list);
                    }}>
                <react_native_1.Text style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        color: (item === null || item === void 0 ? void 0 : item.selected)
                            ? theme.colors.white
                            : theme.colors.primaryText,
                        fontWeight: (item === null || item === void 0 ? void 0 : item.selected) ? '500' : '200',
                        fontSize: 18,
                        height: 22,
                    }}>
                  {item === null || item === void 0 ? void 0 : item.title}
                  <react_native_1.Text style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        color: (item === null || item === void 0 ? void 0 : item.selected)
                            ? theme.colors.white
                            : theme.colors.primaryText,
                        fontWeight: (item === null || item === void 0 ? void 0 : item.selected) ? '500' : '200',
                        fontSize: 16,
                        height: 22,
                    }}>
                    {' ' + (item === null || item === void 0 ? void 0 : item.period)}
                  </react_native_1.Text>
                </react_native_1.Text>
              </react_native_1.TouchableOpacity>)} ListFooterComponent={() => (<>
                {(lastItem === null || lastItem === void 0 ? void 0 : lastItem.title) == (sectionItem === null || sectionItem === void 0 ? void 0 : sectionItem.title) ? null : (<react_native_1.View style={styles.bottomSeparateView}/>)}
              </>)} keyExtractor={item => `basicListEntry-${item}`}/>) : (<react_native_1.Text style={styles.emptyText}>No Availability</react_native_1.Text>)}
      </react_native_1.View>);
    };
    return (<react_native_1.View>
      <react_native_1.SectionList sections={section} renderItem={({ section, item }) => renderSection(section, item)} renderSectionHeader={({ section: { title } }) => (<react_native_1.Text style={[
                styles.title,
                section.findIndex((item) => item.title == title) != 0
                    ? { marginVertical: 16 }
                    : { marginBottom: 16 },
            ]}>
            {title}
          </react_native_1.Text>)} stickySectionHeadersEnabled={isStickySectionHeadersEnabled} keyExtractor={item => `time-${item === null || item === void 0 ? void 0 : item.key}`}/>
    </react_native_1.View>);
};
exports.SectionListItem = SectionListItem;
//# sourceMappingURL=section-list-item.component.js.map