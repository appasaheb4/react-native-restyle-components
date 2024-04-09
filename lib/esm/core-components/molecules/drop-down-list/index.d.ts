import React from 'react';
export interface DropDownListProps {
    title?: string;
    list: Array<any>;
    displayKey: string;
    onChange: (item: string) => void;
}
export declare const DropDownList: ({ title, list, displayKey, onChange, }: DropDownListProps) => React.JSX.Element;
