import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './style';
import {RemoveIcon, SearchIcon} from '../../../library/assets/icons';

export interface SearchDropDownListProps {
  title?: string;
  placeholder?: string;
  displayValue?: string;
  list: Array<any>;
  displayKey: string;
  onSearch: (value: string) => void;
  onSelect: (item: any) => void;
}

export const SearchDropDownList = ({
  title = '',
  placeholder = 'Search Text',
  displayValue = '',
  list = [],
  displayKey = '',
  onSearch,
  onSelect,
}: SearchDropDownListProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const [value, setValue] = useState(displayValue);
  const [isOpen, setIsOpen] = useState(false);
  const [optionList, setOptionList] = useState<Array<any>>([]);

  useEffect(() => {
    setOptionList(list);
  }, [list]);

  useEffect(() => {
    setValue(displayValue);
  }, [displayValue]);

  return (
    <View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <View style={styles.warperView}>
        <View style={{flex: 0.1}}>
          <SearchIcon />
        </View>
        <View style={{flex: 0.8}}>
          <TextInput
            placeholder={placeholder}
            value={
              value?.length < 34 ? `${value}` : `${value?.substring(0, 34)}...`
            }
            numberOfLines={1}
            onChangeText={text => {
              setValue(text);
              onSearch(text);
              setIsOpen(true);
            }}
            placeholderTextColor={theme.colors.gray5}
          />
        </View>
        {value?.length > 0 && (
          <View style={{flex: 0.1}}>
            <TouchableOpacity
              onPress={() => {
                setIsOpen(false);
                setValue('');
                onSearch('');
              }}>
              <RemoveIcon />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isOpen && (
        <View style={styles.flatListWarperView}>
          {optionList?.length > 0 ? (
            <FlatList
              style={styles.flatListView}
              data={optionList}
              nestedScrollEnabled
              contentContainerStyle={{paddingBottom: 20}}
              renderItem={({item}: {item: any}) => (
                <View>
                  <TouchableOpacity
                    style={{
                      marginVertical: 8,
                    }}
                    onPress={() => {
                      console.log({item});
                      onSelect(item);
                      setValue(item[displayKey]);
                      setIsOpen(!isOpen);
                    }}>
                    <Text style={{color: theme.colors.gray6, marginLeft: 2}}>
                      {item[displayKey]}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(_item, index) => index.toString()}
            />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                margin: 40,
                color: theme.colors.gray5,
              }}>
              No results found
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
