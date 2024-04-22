import React from 'react';
export interface DropDownCheckBoxParentChildProps {
    title?: string;
    data: Array<any>;
    testID?: string;
    mode?: string;
    maxHeight?: number;
    minHeight?: number;
    search?: boolean;
    dropdownPosition?: string;
    keyboardAvoiding?: boolean;
    backgroundColor?: string;
    containerStyle?: string;
    accessibilityLabel?: string;
    onChange: (item: string) => void;
}
export declare const DropDownCheckBoxParentChild: React.ForwardRefExoticComponent<DropDownCheckBoxParentChildProps & React.RefAttributes<unknown>>;
