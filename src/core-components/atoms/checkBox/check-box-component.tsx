import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import {useTheme} from '../../../theme1';
import styleSheet from './style';

export interface CheckBoxProps {
  title?: string;
  list: Array<any>;
  onChange: (item: any) => void;
}

export const CheckBox = ({title = '', list = [], onChange}: CheckBoxProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const [options, setOptions] = useState<Array<any>>();

  useEffect(() => {
    setOptions(list);
  }, [list]);

  return (
    <View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <View>
        {options?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              marginVertical: 6,
              alignItems: 'center',
            }}
            onPress={() => {
              const result = options.map(e => {
                if (e.title == item.title) return {...e, selected: true};
                else return {...e, selected: false};
              });
              setOptions(result);
              onChange(result.find(item => item.selected));
            }}>
            <View
              style={[
                styles.radioCycle,
                {
                  backgroundColor: item.selected
                    ? theme.colors.primary
                    : 'transparent',
                  borderWidth: item.selected ? 0 : 1,
                },
              ]}
            />
            <Text style={{marginLeft: 6}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
