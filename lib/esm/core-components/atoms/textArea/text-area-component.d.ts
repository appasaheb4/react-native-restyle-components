import React from 'react';
export interface TextAreaProps {
    title?: string;
    placeholder?: string;
    onChangeText: (value: string) => void;
}
export declare const TextArea: ({ title, placeholder, onChangeText, }: TextAreaProps) => React.JSX.Element;
