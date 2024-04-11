import React from 'react';
export interface TextAreaProps {
    title?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    onChangeText: (value: string) => void;
}
export declare const TextArea: ({ title, placeholder, placeholderTextColor, onChangeText, }: TextAreaProps) => React.JSX.Element;
