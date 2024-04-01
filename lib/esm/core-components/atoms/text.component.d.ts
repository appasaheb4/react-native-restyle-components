import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { ColorProps, OpacityProps, SpacingProps, TextShadowProps, TypographyProps, VisibleProps, VariantProps } from '@shopify/restyle';
import { Theme, RestyleProps } from '../../theme';
declare type BaseTextProps = ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & VariantProps<Theme, 'textVariants'> & TextShadowProps<Theme> & {
    numberOfLines?: number;
    testID?: string;
    style?: any;
    children?: React.ReactNode;
};
declare type TextProps = RestyleProps<'textVariants'> & RNTextProps;
export declare function Text({ children, variant, ...rest }: TextProps): React.JSX.Element;
export declare const TextRN: ({ testID, style, children, }: BaseTextProps) => JSX.Element;
export {};
