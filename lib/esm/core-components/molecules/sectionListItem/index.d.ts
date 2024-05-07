import React from 'react';
export interface SectionListItemProps {
    data: Array<any>;
    onChange: (item: any) => void;
}
export declare const SectionListItem: ({ data, onChange, }: SectionListItemProps) => React.JSX.Element;
