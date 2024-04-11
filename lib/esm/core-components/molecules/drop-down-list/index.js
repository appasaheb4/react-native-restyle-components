import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
import { ArrowBottom, ArrowTop } from '../../../library/assets/icons';
export const DropDownList = ({ title = '', list = [], displayKey = '', onChange, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState('Select');
    const [isOpen, setIsOpen] = useState(false);
    const [optionList, setOptionList] = useState([]);
    useEffect(() => {
        setOptionList(list);
    }, [list]);
    return (<View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <TouchableOpacity style={styles.warperView} onPress={() => {
            setIsOpen(!isOpen);
        }}>
        <View style={styles.optionView}>
          <Text>{value}</Text>
          {isOpen ? (<ArrowTop color={theme.colors.gray6}/>) : (<ArrowBottom color={theme.colors.gray6}/>)}
        </View>
      </TouchableOpacity>
      {isOpen && (<View style={styles.flatListWarperView}>
          <FlatList style={styles.flatListView} data={optionList} renderItem={({ item }) => (<View>
                <TouchableOpacity style={{
                    marginVertical: 8,
                }} onPress={() => {
                    onChange(item[displayKey]);
                    setValue(item.title);
                    setIsOpen(!isOpen);
                }}>
                  <Text style={{ marginLeft: 2 }}>{item[displayKey]}</Text>
                </TouchableOpacity>
              </View>)} keyExtractor={(_item, index) => index.toString()}/>
        </View>)}
    </View>);
};
//# sourceMappingURL=index.js.map