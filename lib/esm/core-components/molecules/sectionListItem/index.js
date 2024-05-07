import { View, Text, FlatList, TouchableOpacity, SectionList, } from 'react-native';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './styles';
export const SectionListItem = ({ data = [], onChange, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [section, setSection] = useState([
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
    useEffect(() => {
        if ((data === null || data === void 0 ? void 0 : data.length) > 0)
            setSection(data);
    }, data);
    const renderSection = (sectionItem, { list }) => {
        return (<>
        {(list === null || list === void 0 ? void 0 : list.length) > 0 ? (<FlatList data={list} numColumns={3} columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between',
                }} contentContainerStyle={{ paddingBottom: 30 }} renderItem={({ item, index }) => (<TouchableOpacity style={[
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
                        selectedItem = _.without(selectedItem, undefined);
                        onChange(selectedItem[0]);
                        setSection(list);
                    }}>
                <Text>{item === null || item === void 0 ? void 0 : item.title}</Text>
              </TouchableOpacity>)} ListFooterComponent={() => (<>
                <View style={styles.bottomSeparateView}/>
              </>)} keyExtractor={item => `basicListEntry-${item}`}/>) : (<Text style={styles.emptyText}>No Availability</Text>)}
      </>);
    };
    return (<View>
      <SectionList sections={section} renderItem={({ section, item }) => renderSection(section, item)} renderSectionHeader={({ section }) => (<Text style={styles.title}>{section.title}</Text>)} keyExtractor={item => `time-${item === null || item === void 0 ? void 0 : item.key}`}/>
    </View>);
};
//# sourceMappingURL=index.js.map