/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useRef, useEffect, useImperativeHandle, } from 'react';
import { Text, TouchableOpacity, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const INPUT_HEIGHT = 48;
// eslint-disable-next-line react/display-name
export const Dropdown = React.forwardRef(({ label, displayKey = 'title', hasError, testID, data, zIndex, unSelectedItemColor = '#ffffff', selectedItemColor = '#F0EFEE', iconColor = '#000000', onSelect, }, ref) => {
    const [visible, setVisible] = useState(false);
    const DropdownButton = useRef(null);
    const [value, setValue] = useState(label);
    const [options, setOptions] = useState(data);
    useEffect(() => {
        setOptions(data.filter((item) => {
            item.selected = item[displayKey] === value ? true : false;
            console.log({ item });
            return item;
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, value]);
    const toggleDropdown = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        visible ? setVisible(false) : setVisible(true);
    };
    useImperativeHandle(ref, () => ({
        hidePoup() {
            setVisible(false);
        },
    }));
    const onItemPress = (item) => {
        setValue(item[displayKey]);
        onSelect(item);
        setVisible(false);
    };
    const renderItem = ({ item, index }) => (<TouchableOpacity style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: item.selected
                ? selectedItemColor
                : unSelectedItemColor,
            marginBottom: data.length !== index + 1 ? 4 : 0,
        }} onPress={() => onItemPress(item)}>
        <Text>{item[displayKey]}</Text>
      </TouchableOpacity>);
    const renderDropdown = () => {
        return (visible && (<View style={{
                flex: 1,
                position: 'absolute',
                top: INPUT_HEIGHT - 4,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 1,
                backgroundColor: 'white',
                width: '100%',
            }}>
            <FlatList data={options} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
          </View>));
    };
    return (<View style={{
            borderBottomWidth: 1,
            borderRadius: 5,
            borderColor: hasError ? 'red' : 'gray',
            padding: 5,
            height: INPUT_HEIGHT,
            zIndex: zIndex,
        }} testID={testID}>
        <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
        }} testID={`${testID}_CLICK`}>
          <Text>{value || label}</Text>
          {renderDropdown()}
          {visible ? (<Icon name="chevron-up" size={30} color={iconColor}/>) : (<Icon name="chevron-down" size={30} color={iconColor}/>)}
        </TouchableOpacity>
      </View>);
});
//# sourceMappingURL=drop-down.component.js.map