import React from 'react';
interface Props {
    label: string;
    displayKey?: any;
    hasError?: boolean;
    data: Array<{
        label: string;
        value: string;
        selected?: boolean;
    }>;
    testID?: string;
    zIndex?: number;
    unSelectedItemColor?: string;
    selectedItemColor?: string;
    iconColor?: string;
    onSelect: (item: {
        label: string;
        value: string;
    }) => void;
}
export declare const Dropdown: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export {};
