import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
import { RemoveIcon, SearchIcon } from '../../../library/assets/icons';
export const SearchDropDownList = ({ title = '', placeholder = 'Search Text', displayValue = '', list = [], displayKey = '', onSearch, onSelect, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState(displayValue);
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState([]);
    useEffect(() => {
        setOptionList(list);
    }, [list]);
    useEffect(() => {
        setValue(displayValue);
    }, [displayValue]);
    return (<View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <View style={styles.warperView}>
        <View style={{ flex: 0.1 }}>
          <SearchIcon />
        </View>
        <View style={{ flex: 0.8 }}>
          <TextInput placeholder={placeholder} value={value?.length < 34 ? `${value}` : `${value?.substring(0, 34)}...`} numberOfLines={1} onChangeText={text => {
            setValue(text);
            onSearch(text);
            setIsOpen(true);
        }} style={{
            color: value?.length > 0 ? theme.colors.gray6 : theme.colors.gray5,
        }} placeholderTextColor={placeholder == 'Search' || placeholder == 'Search Text'
            ? theme.colors.gray5
            : theme.colors.gray6}/>
        </View>
        {value?.length > 0 && (<View style={{ flex: 0.1 }}>
            <TouchableOpacity onPress={() => {
                setIsOpen(false);
                setValue('');
                onSearch('');
            }}>
              <RemoveIcon />
            </TouchableOpacity>
          </View>)}
      </View>
      {isOpen && (<View style={styles.flatListWarperView}>
          {optionList?.length > 0 && value?.length > 2 ? (<FlatList style={styles.flatListView} data={optionList} nestedScrollEnabled contentContainerStyle={{
                    paddingBottom: optionList?.length > 8 ? 16 : 0,
                }} renderItem={({ item }) => (<View>
                  <TouchableOpacity style={{
                        marginVertical: 6,
                    }} onPress={() => {
                        onSelect(item);
                        setValue(item[displayKey]);
                        setIsOpen(!isOpen);
                    }}>
                    <Text style={{ color: theme.colors.gray6, marginLeft: 2 }}>
                      {item[displayKey]}
                    </Text>
                  </TouchableOpacity>
                </View>)} keyExtractor={(_item, index) => index.toString()}/>) : (<Text style={{
                    textAlign: 'center',
                    padding: 16,
                    color: theme.colors.gray5,
                }}>
              No results found
            </Text>)}
        </View>)}
    </View>);
};
