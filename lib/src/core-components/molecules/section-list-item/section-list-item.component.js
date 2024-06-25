import { View, Text, FlatList, TouchableOpacity, SectionList, Dimensions, } from 'react-native';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './styles';
export const SectionListItem = ({ data = [], isStickySectionHeadersEnabled = true, onChange, }) => {
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
    const renderSection = (sectionItem, { list }) => {
        return (<View>
        {list?.length > 0 ? (<FlatList data={list} numColumns={numColumns} style={{
                    marginBottom: lastItem?.title == sectionItem?.title ? 40 : 0,
                }} contentContainerStyle={{
                    gap,
                }} columnWrapperStyle={{ gap, marginBottom: 10 }} renderItem={({ item, index }) => (<TouchableOpacity style={[
                        styles.listItemWrapper,
                        {
                            backgroundColor: item?.selected
                                ? theme.colors.orange
                                : theme.colors.white,
                            width: itemSize,
                            marginBottom: gap - 8,
                        },
                    ]} onPress={() => {
                        const list = section.map((o) => {
                            if (o.title == sectionItem.title) {
                                const info = o;
                                info.data[0] = {
                                    ...info.data[0],
                                    list: o.data[0]?.list?.map((e) => {
                                        if (e.title == item.title)
                                            return { ...e, selected: true };
                                        else
                                            return { ...e, selected: false };
                                    }),
                                };
                                return info;
                            }
                            else
                                return {
                                    ...o,
                                    data: o.data?.map((io) => {
                                        return {
                                            ...io,
                                            list: io.list?.map((il) => {
                                                return { ...il, selected: false };
                                            }),
                                        };
                                    }),
                                };
                        });
                        let selectedItem = list.map((item) => {
                            if (item.data[0]?.list?.find((inItem) => inItem.selected))
                                return {
                                    ...item,
                                    data: {
                                        ...item.data[0],
                                        list: item.data[0]?.list?.find((inItem) => inItem.selected),
                                    },
                                };
                        });
                        selectedItem = _.without(selectedItem, undefined);
                        onChange(selectedItem[0]);
                        setSection(list);
                    }}>
                <Text style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        color: item?.selected
                            ? theme.colors.white
                            : theme.colors.primaryText,
                        fontWeight: item?.selected ? '500' : '200',
                        fontSize: 18,
                        height: 22,
                    }}>
                  {item?.title}
                  <Text style={{
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        color: item?.selected
                            ? theme.colors.white
                            : theme.colors.primaryText,
                        fontWeight: item?.selected ? '500' : '200',
                        fontSize: 16,
                        height: 22,
                    }}>
                    {' ' + item?.period}
                  </Text>
                </Text>
              </TouchableOpacity>)} ListFooterComponent={() => (<>
                {lastItem?.title == sectionItem?.title ? null : (<View style={styles.bottomSeparateView}/>)}
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
          </Text>)} stickySectionHeadersEnabled={isStickySectionHeadersEnabled} keyExtractor={item => `time-${item?.key}`}/>
    </View>);
};
