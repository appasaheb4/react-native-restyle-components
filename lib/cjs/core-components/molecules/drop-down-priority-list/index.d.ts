import React from 'react';
export interface DropDownPriorityListProps {
    title?: string;
    list: Array<any>;
    displayKey: string;
    onChange: (item: any) => void;
}
export declare const DropDownPriorityList: ({ title, list, displayKey, onChange, }: DropDownPriorityListProps) => React.JSX.Element;
