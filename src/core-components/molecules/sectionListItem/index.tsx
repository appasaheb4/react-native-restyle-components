import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './styles';

export interface SectionListItemProps {
  data: Array<any>;
  onChange: (item: any) => void;
}

export const SectionListItem = ({
  data = [],
  onChange,
}: SectionListItemProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);

  const [section, setSection] = useState([
    {
      title: 'Today, Thursday, May 5',
      key: 'May 5',
      data: [
        {
          key: 'time',
          list: [{title: '10:30 AM'}, {title: '11:30 AM'}, {title: '12:30 PM'}],
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
            {title: '10:30 AM'},
            {title: '11:30 AM'},
            {title: '12:30 PM'},
            {title: '01:30 PM'},
          ],
        },
      ],
    },
    {
      title: 'Saturday, May 7',
      key: 'May 7',
      data: [{key: 'time', list: []}],
    },
    {
      title: 'Sunday, May 8',
      data: [
        {
          key: 'time',
          list: [{title: '10:30 AM'}, {title: '11:30 AM'}, {title: '12:30 PM'}],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (data?.length > 0) setSection(data);
  }, data);

  const renderSection = (sectionItem: any, {list}: {list: any}) => {
    return (
      <>
        {list?.length > 0 ? (
          <FlatList
            data={list}
            numColumns={3}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between',
            }}
            contentContainerStyle={{paddingBottom: 30}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  styles.listItemWrapper,
                  {
                    backgroundColor: item?.selected
                      ? theme.colors.orange
                      : theme.colors.white,
                  },
                ]}
                onPress={() => {
                  const list = section.map(o => {
                    if (o.title == sectionItem.title) {
                      const info: any = o;
                      info.data[0] = {
                        ...info.data[0],
                        list: o.data[0]?.list?.map(e => {
                          if (e.title == item.title)
                            return {...e, selected: true};
                          else return {...e, selected: false};
                        }),
                      };
                      return info;
                    } else
                      return {
                        ...o,
                        data: o.data?.map((io: any) => {
                          return {
                            ...io,
                            list: io.list?.map((il: any) => {
                              return {...il, selected: false};
                            }),
                          };
                        }),
                      };
                  });
                  let selectedItem = list.map(item => {
                    if (
                      item.data[0]?.list?.find((inItem: any) => inItem.selected)
                    )
                      return {
                        ...item,
                        data: {
                          ...item.data[0],
                          list: item.data[0]?.list?.find(
                            (inItem: any) => inItem.selected,
                          ),
                        },
                      };
                  });
                  selectedItem = _.without(selectedItem, undefined);
                  onChange(selectedItem[0]);
                  setSection(list);
                }}>
                <Text>{item?.title}</Text>
              </TouchableOpacity>
            )}
            ListFooterComponent={() => (
              <>
                <View style={styles.bottomSeparateView} />
              </>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
          />
        ) : (
          <Text style={styles.emptyText}>No Availability</Text>
        )}
      </>
    );
  };
  return (
    <View>
      <SectionList
        sections={section}
        renderItem={({section, item}) => renderSection(section, item)}
        renderSectionHeader={({section}) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        keyExtractor={item => `time-${item?.key}`}
      />
    </View>
  );
};
