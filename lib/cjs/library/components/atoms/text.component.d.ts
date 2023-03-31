import React from 'react';
import { ColorProps, OpacityProps, SpacingProps, TextShadowProps, TypographyProps, VisibleProps, VariantProps } from '@shopify/restyle';
import { Theme } from '@/theme';
declare type BaseTextProps = ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & VariantProps<Theme, 'textVariants'> & TextShadowProps<Theme> & {
    numberOfLines?: number;
    testID?: string;
    style?: any;
    children?: React.ReactNode;
};
export declare const Text: ({ testID, children, ...rest }: BaseTextProps) => JSX.Element;
export declare const TextRN: ({ testID, style, children, ...rest }: BaseTextProps) => JSX.Element;
export {};
