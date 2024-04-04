import React from 'react';
export interface DropDownCheckBoxParentChildProps {
    title?: string;
    list: Array<any>;
    onChange: (item: string) => void;
}
export declare const DropDownCheckBoxParentChild: ({ title, list, onChange, }: DropDownCheckBoxParentChildProps) => React.JSX.Element;
