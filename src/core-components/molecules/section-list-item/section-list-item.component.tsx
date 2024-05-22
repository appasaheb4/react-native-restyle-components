import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SectionList,
  Dimensions,
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
    console.log({data});
    setSection(data);
  }, [data]);

  const screenWidth =
    Dimensions.get('window').width - Dimensions.get('window').width / 4;
  const numColumns = 3;
  const gap = 10;

  const availableSpace = screenWidth - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  const lastItem = React.useMemo(() => {
    const last = section[section.length - 1];
    if (!_.isEmpty(last)) {
      return last;
    }
    return false;
  }, [section]);

  const renderSection = (sectionItem: any, {list}: {list: any}) => {
    return (
      <View>
        {list?.length > 0 ? (
          <FlatList
            data={list}
            numColumns={numColumns}
            style={{
              marginBottom: lastItem?.title == sectionItem?.title ? 40 : 0,
            }}
            contentContainerStyle={{
              gap,
            }}
            columnWrapperStyle={{gap, marginBottom: 10}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  styles.listItemWrapper,
                  {
                    backgroundColor: item?.selected
                      ? theme.colors.orange
                      : theme.colors.white,
                    width: itemSize,
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
                <Text style={{textAlign: 'center'}}>{item?.title}</Text>
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