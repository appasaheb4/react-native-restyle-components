import React from 'react';
export interface SectionListItemProps {
    data: Array<any>;
    isStickySectionHeadersEnabled?: boolean;
    onChange: (item: any) => void;
}
export declare const SectionListItem: ({ data, isStickySectionHeadersEnabled, onChange, }: SectionListItemProps) => React.JSX.Element;
