import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {useTheme} from '@/theme1';
import styleSheet from './styles';

interface ButtonProps {
  title: string;
  titleStyle?: TextProps | any;
  buttonStyle?: TouchableOpacityProps | any;
  isDisabled?: boolean;
  onPress: () => void;
}

export const Button = ({
  title = '',
  titleStyle,
  buttonStyle,
  isDisabled = false,
  onPress,
}: ButtonProps) => {
  const theme = useTheme();
  const styles = styleSheet(theme);

  const buttonStyling = () => {
    return {
      ...buttonStyle,
      opacity: isDisabled ? 0.7 : 1,
    };
  };
  return (
    <TouchableOpacity
      activeOpacity={isDisabled ? 1 : 0.7}
      onPress={() => !isDisabled && onPress()}
      disabled={isDisabled}
      style={[styles.buttonStyle, buttonStyling()]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
