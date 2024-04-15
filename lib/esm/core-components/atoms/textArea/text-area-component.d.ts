import React from 'react';
export interface TextAreaProps {
    title?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    numberOfLines?: number;
    onChangeText: (value: string) => void;
}
export declare const TextArea: ({ title, placeholder, placeholderTextColor, numberOfLines, onChangeText, }: TextAreaProps) => React.JSX.Element;
