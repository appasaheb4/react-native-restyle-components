import React from 'react';
export interface SearchDropDownListProps {
    title?: string;
    placeholder?: string;
    displayValue?: string;
    list: Array<any>;
    displayKey: string;
    onSearch: (value: string) => void;
    onSelect: (item: any) => void;
}
export declare const SearchDropDownList: ({ title, placeholder, displayValue, list, displayKey, onSearch, onSelect, }: SearchDropDownListProps) => React.JSX.Element;
