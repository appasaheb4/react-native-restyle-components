import { TextProps, TouchableOpacityProps } from 'react-native';
import React from 'react';
interface ButtonProps {
    title: string;
    titleStyle?: TextProps | any;
    buttonStyle?: TouchableOpacityProps | any;
    isDisabled?: boolean;
    onPress: () => void;
}
export declare const Button: ({ title, titleStyle, buttonStyle, isDisabled, onPress, }: ButtonProps) => React.JSX.Element;
export {};
