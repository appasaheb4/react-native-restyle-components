import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
  const [section, setSection] = useState<any>([]);
  useEffect(() => {
    setSection(data);
  }, [data]);

  const renderSection = (sectionItem: any, {list}: {list: any}) => {
    return (
      <View style={{marginBottom: 30}}>
        {list?.length > 0 ? (
          <FlatList
            data={list}
            numColumns={3}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between',
              paddingBottom: 20,
              backgroundColor: '#ffffff',
            }}
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
      </View>
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
