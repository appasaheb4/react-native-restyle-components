import React from 'react';
export interface CheckBoxProps {
    title?: string;
    list: Array<any>;
    onChange: (item: any) => void;
}
export declare const CheckBox: ({ title, list, onChange }: CheckBoxProps) => React.JSX.Element;
