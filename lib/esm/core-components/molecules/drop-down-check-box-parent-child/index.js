import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
// import Icon from 'react-native-vector-icons/Feather';
import * as SVG from '../../../library/assets/icons';
export const DropDownCheckBoxParentChild = ({ title = '', list = [], onChange, }) => {
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
          {isOpen ? (<SVG.ArrowTop color={theme.colors.gray6}/>) : (<SVG.ArrowBottom color={theme.colors.gray6}/>)}
          {/* {isOpen ? (
          <Icon name="chevron-up" size={30} color="#4A4A4A" />
        ) : (
          <Icon name="chevron-down" size={30} color="#4A4A4A" />
        )} */}
        </View>
      </TouchableOpacity>
      {isOpen && (<View style={styles.flatListWarperView}>
          <FlatList style={styles.flatListView} data={optionList} renderItem={({ item, index }) => {
                var _a;
                return (<View>
                <TouchableOpacity style={{
                        flexDirection: 'row',
                        marginVertical: 6,
                        alignItems: 'center',
                    }} onPress={() => {
                        const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                            var _a;
                            let childOption = opList;
                            let isSelected = opList.selected;
                            if (opIndex == index)
                                isSelected = !opList.selected;
                            else
                                isSelected = false;
                            const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch) => {
                                return Object.assign(Object.assign({}, ch), { selected: false });
                            });
                            childOption = [
                                {
                                    [Object.keys(childOption[0])[0]]: newArr,
                                    selected: isSelected,
                                },
                            ];
                            return Object.assign(Object.assign({}, childOption), { selected: isSelected });
                        });
                        onChange(Object.keys(item[0])[0]);
                        setValue(Object.keys(item[0])[0]);
                        setOptionList(JSON.parse(JSON.stringify(list)));
                    }}>
                  <View style={[
                        styles.radioCycle,
                        {
                            backgroundColor: (item === null || item === void 0 ? void 0 : item.selected)
                                ? theme.colors.primary
                                : 'transparent',
                            borderWidth: (item === null || item === void 0 ? void 0 : item.selected) ? 0 : 1,
                        },
                    ]}/>
                  <Text style={{ marginLeft: 6 }}>{Object.keys(item[0])[0]}</Text>
                </TouchableOpacity>
                {(_a = item[0][Object.keys(item[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((e, i) => (<TouchableOpacity style={{
                            flexDirection: 'row',
                            marginVertical: 6,
                            alignItems: 'center',
                            marginLeft: 30,
                        }} onPress={() => {
                            const list = optionList === null || optionList === void 0 ? void 0 : optionList.map((opList, opIndex) => {
                                var _a;
                                let childOption = opList;
                                const newArr = (_a = childOption[0][Object.keys(childOption[0])[0]]) === null || _a === void 0 ? void 0 : _a.map((ch, chIndex) => {
                                    if (index == opIndex && chIndex == i)
                                        return Object.assign(Object.assign({}, ch), { selected: !ch.selected });
                                    return Object.assign(Object.assign({}, ch), { selected: false });
                                    return ch;
                                });
                                childOption = [
                                    {
                                        [Object.keys(childOption[0])[0]]: newArr,
                                        selected: false,
                                    },
                                ];
                                return childOption;
                            });
                            onChange(e.title);
                            setValue(e.title);
                            setOptionList(JSON.parse(JSON.stringify(list)));
                        }}>
                    <View style={[
                            styles.radioCycle,
                            {
                                backgroundColor: (e === null || e === void 0 ? void 0 : e.selected)
                                    ? theme.colors.primary
                                    : 'transparent',
                                borderWidth: (e === null || e === void 0 ? void 0 : e.selected) ? 0 : 1,
                            },
                        ]}/>
                    <Text style={{ marginLeft: 6 }}>{e.title}</Text>
                  </TouchableOpacity>))}
              </View>);
            }} keyExtractor={(_item, index) => index.toString()}/>
        </View>)}
    </View>);
};
//# sourceMappingURL=index.js.map