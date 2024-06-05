import React from 'react';
export interface DropDownPriorityListProps {
    title?: string;
    data: Array<any>;
    displayKey: string;
    displayValue?: string;
    testID?: string;
    mode?: string;
    maxHeight?: number;
    minHeight?: number;
    search?: boolean;
    disable?: boolean;
    dropdownPosition?: string;
    keyboardAvoiding?: boolean;
    backgroundColor?: string;
    containerStyle?: string;
    accessibilityLabel?: string;
    onChange: (item: any) => void;
}
export declare const DropDownPriorityList: React.ForwardRefExoticComponent<DropDownPriorityListProps & React.RefAttributes<unknown>>;
