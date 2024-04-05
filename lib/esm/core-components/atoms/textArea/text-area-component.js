import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import _ from 'lodash';
import { useTheme } from '../../../theme1';
import styleSheet from './style';
export const TextArea = ({ title = '', placeholder = '', onChangeText, }) => {
    const theme = useTheme();
    const styles = styleSheet(theme);
    const [value, setValue] = useState('');
    return (<View>
      {!_.isEmpty(title) && <Text style={styles.text}>{title}</Text>}
      <View style={styles.textAreaContainer}>
        <TextInput value={value} placeholder={placeholder} style={styles.textArea} underlineColorAndroid="transparent" placeholderTextColor="grey" numberOfLines={10} multiline={true} onChangeText={(value) => {
            onChangeText(value);
            setValue(value);
        }}/>
      </View>
    </View>);
};
//# sourceMappingURL=text-area-component.js.map