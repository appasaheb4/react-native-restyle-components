import { View, Text, FlatList, TouchableOpacity, SectionList, Dimensions, } from 'react-native';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './styles';
export const SectionListItem = ({ data = [], onChange, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [section, setSection] = useState([]);
    useEffect(() => {
        console.log({ data });
        setSection(data);
    }, [data]);
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 3;
    const gap = 14;
    const availableSpace = screenWidth - 80;
    const itemSize = availableSpace / numColumns;
    const lastItem = React.useMemo(() => {
        const last = section[section.length - 1];
        if (!_.isEmpty(last)) {
            return last;
        }
        return false;
    }, [section]);
    console.log({ section });
    const renderSection = (sectionItem, { list }) => {
        return (<View>
        {(list === null || list === void 0 ? void 0 : list.length) > 0 ? (<FlatList data={list} numColumns={numColumns} style={{
                    marginBottom: (lastItem === null || lastItem === void 0 ? void 0 : lastItem.title) == (sectionItem === null || sectionItem === void 0 ? void 0 : sectionItem.title) ? 40 : 0,
                }} contentContainerStyle={{
                    gap,
                }} columnWrapperStyle={{ gap, marginBottom: 10 }} renderItem={({ item, index }) => (<TouchableOpacity style={[
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
                        selectedItem = _.without(selectedItem, undefined);
                        onChange(selectedItem[0]);
                        setSection(list);
                    }}>
                <Text style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        color: (item === null || item === void 0 ? void 0 : item.selected)
                            ? theme.colors.white
                            : theme.colors.primaryText,
                        fontWeight: (item === null || item === void 0 ? void 0 : item.selected) ? '400' : '500',
                        fontSize: 18,
                        height: 22,
                    }}>
                  {item === null || item === void 0 ? void 0 : item.title}
                </Text>
              </TouchableOpacity>)} ListFooterComponent={() => (<>
                <View style={styles.bottomSeparateView}/>
              </>)} keyExtractor={item => `basicListEntry-${item}`}/>) : (<Text style={styles.emptyText}>No Availability</Text>)}
      </View>);
    };
    return (<View>
      <SectionList sections={section} renderItem={({ section, item }) => renderSection(section, item)} renderSectionHeader={({ section: { title } }) => (<Text style={[
                styles.title,
                section.findIndex((item) => item.title == title) != 0
                    ? { marginVertical: 16 }
                    : { marginBottom: 16 },
            ]}>
            {title}
          </Text>)} keyExtractor={item => `time-${item === null || item === void 0 ? void 0 : item.key}`}/>
    </View>);
};
//# sourceMappingURL=section-list-item.component.js.map