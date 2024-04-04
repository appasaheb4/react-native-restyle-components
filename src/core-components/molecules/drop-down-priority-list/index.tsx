import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './style';
import {ArrowBottomIcon, ArrowTopIcon} from '../../../library/assets/icons';

export interface DropDownPriorityListProps {
  title?: string;
  list: Array<any>;
  displayKey: string;
  onChange: (item: any) => void;
}

export const DropDownPriorityList = ({
  title = '',
  list = [],
  displayKey = '',
  onChange,
}: DropDownPriorityListProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const [value, setValue] = useState({color: '', title: 'Select'});
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<any>>([]);

  useEffect(() => {
    setOptionList(list);
  }, [list]);

  return (
    <View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <TouchableOpacity
        style={styles.warperView}
        onPress={() => {
          setIsOpen(!isOpen);
        }}>
        <View style={styles.optionView}>
          <View style={{flexDirection: 'row'}}>
            {!_.isEmpty(value.color) && (
              <View
                style={[
                  styles.square,
                  {
                    backgroundColor: value.color,
                    marginRight: 4,
                  },
                ]}
              />
            )}
            <Text>{value?.title}</Text>
          </View>

          {isOpen ? (
            <ArrowTopIcon color={theme.colors.gray6} />
          ) : (
            <ArrowBottomIcon color={theme.colors.gray6} />
          )}
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.flatListWarperView}>
          <FlatList
            style={styles.flatListView}
            data={optionList}
            renderItem={({item}: {item: any}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginVertical: 8,
                  }}
                  onPress={() => {
                    onChange(item);
                    setValue(item);
                  }}>
                  <View
                    style={[
                      styles.square,
                      {
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                  <Text style={{marginLeft: 4}}>{item[displayKey]}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};
