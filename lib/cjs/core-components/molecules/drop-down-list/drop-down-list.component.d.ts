import React from 'react';
interface DropDownListProps {
    displayValue?: string;
    title: string;
    displayKey: string;
    testID?: string;
    onChange: (item: any) => void;
    containerStyle?: string;
    data: Array<any>;
    valueField?: any;
    search?: boolean;
    maxHeight?: number;
    minHeight?: number;
    disable?: boolean;
    keyboardAvoiding?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    autoScroll?: boolean;
    dropdownPosition?: string;
    backgroundColor?: string;
    accessibilityLabel?: string;
    mode?: string;
}
export declare const DropDownList: React.ForwardRefExoticComponent<DropDownListProps & React.RefAttributes<unknown>>;
export {};
