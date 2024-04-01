import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {
  ColorProps,
  OpacityProps,
  SpacingProps,
  TextShadowProps,
  TypographyProps,
  VisibleProps,
  VariantProps,
  createVariant,
  createRestyleComponent,
} from '@shopify/restyle';

import {Theme, RestyleProps, allRestyleFunctions} from '../../theme';

type BaseTextProps = ColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  TypographyProps<Theme> &
  SpacingProps<Theme> &
  VariantProps<Theme, 'textVariants'> &
  TextShadowProps<Theme> & {
    numberOfLines?: number;
    testID?: string;
    style?: any;
    children?: React.ReactNode;
  };

//const textVariants = createVariant({themeKey: 'textVariants'});
// const restyleFunctions: any = [
//   textVariants,
//   spacing,
//   color,
//   opacity,
//   visible,
//   typography,
//   spacingShorthand,
//   textShadow,
// ];

// export const Text = ({
//   testID,
//   children,
//   ...rest
// }: BaseTextProps): JSX.Element => {
//   const props = useRestyle(restyleFunctions, rest);

//   return (
//     <RNText allowFontScaling={false} {...props} testID={testID}>
//       {children}
//     </RNText>
//   );
// };

type TextProps = RestyleProps<'textVariants'> & RNTextProps;
const RestyleText = createRestyleComponent<TextProps, Theme>(
  [...allRestyleFunctions, createVariant({themeKey: 'textVariants'})] as any,
  RNText,
);

export function Text({children, variant, ...rest}: TextProps) {
  return (
    <RestyleText variant={variant ?? 'bodyText'} {...rest}>
      {children}
    </RestyleText>
  );
}

export const TextRN = ({
  testID,
  style,
  children,
}: BaseTextProps): JSX.Element => {
  return (
    <RNText allowFontScaling={false} testID={testID} style={style}>
      {children}
    </RNText>
  );
};
