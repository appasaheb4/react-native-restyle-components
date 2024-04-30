import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
export const CheckBox = ({ title = '', value = '', list = [], onChange, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [options, setOptions] = useState();
    useEffect(() => {
        setOptions(!_.isEmpty(value)
            ? list.map(e => {
                if (e.title == value)
                    return Object.assign(Object.assign({}, e), { selected: true });
                else
                    return Object.assign(Object.assign({}, e), { selected: false });
            })
            : list);
    }, [list]);
    return (<View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <View>
        {options === null || options === void 0 ? void 0 : options.map((item, index) => (<TouchableOpacity key={index} style={{
                flexDirection: 'row',
                marginVertical: 6,
                alignItems: 'center',
            }} onPress={() => {
                const result = options.map(e => {
                    if (e.title == item.title)
                        return Object.assign(Object.assign({}, e), { selected: true });
                    else
                        return Object.assign(Object.assign({}, e), { selected: false });
                });
                setOptions(JSON.parse(JSON.stringify(result)));
                onChange(result.find(item => item.selected));
            }}>
            <View style={[
                styles.radioCycle,
                {
                    backgroundColor: item.selected
                        ? theme.colors.primary
                        : 'transparent',
                    borderWidth: item.selected ? 0 : 1,
                },
            ]}/>
            <Text style={{ marginLeft: 6, color: '#4A4A4A' }}>{item.title}</Text>
          </TouchableOpacity>))}
      </View>
    </View>);
};
//# sourceMappingURL=check-box-component.js.map