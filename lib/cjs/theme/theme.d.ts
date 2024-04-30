import { AllProps, VariantProps, VisibleProps } from '@shopify/restyle';
import { PropsWithChildren } from 'react';
export declare const theme: {
    colors: {
        primary: string;
        limsPlusOrange: string;
        limsPlusOrange2: string;
        limsPlusOrange3: string;
        limsPlusGrey: string;
        limsPlusGrey2: string;
        limsPlusGrey3: string;
        limsPlusGrey4: string;
        limsPlusGrey5: string;
        limsPlusGrey6: string;
        limsPlusGrey7: string;
        limsPlusGrey8: string;
        limsPlusGrey9: string;
        limsPlusGrey10: string;
        limsPlusGrey11: string;
        limsPlusGreyTransparent: string;
        sand: string;
        sky: string;
        plum: string;
        nature: string;
        sea: string;
        sea2: string;
        red: string;
        red2: string;
        blueIce: string;
        black: string;
        white: string;
        transparent: string;
        whiteOpacity95: string;
        gray: string;
        grayMiddle: string;
        grayLight: string;
        shadow: string;
        chatGPT: string;
        planBg: string;
    };
    spacing: {
        minm: number;
        none: number;
        xs: number;
        ss: number;
        sm: number;
        md: number;
        m: number;
        l: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
    textVariants: {
        h1: {
            fontSize: number;
            color: string;
        };
        h2: {
            fontSize: number;
            color: string;
        };
        textHeader: {
            fontSize: number;
            color: string;
        };
        textHeaderBold: {
            fontSize: number;
            color: string;
            fontWeight: string;
        };
        bodyText: {
            fontSize: number;
            color: string;
        };
        bodyTextBold: {
            fontSize: number;
            fontWeight: string;
        };
        bodyTextWhite: {
            fontSize: number;
            color: string;
        };
        bodyTextRegular: {
            fontSize: number;
            color: string;
        };
        bodyTextSmall: {
            fontSize: number;
            color: string;
        };
        bodyTextSmallWhite: {
            fontSize: number;
            color: string;
        };
        caption: {
            fontSize: number;
            color: string;
        };
        hyperLinkOrange: {
            color: string;
            fontSize: number;
        };
        hyperLinkBlue: {
            color: string;
            fontSize: number;
        };
        sectionHeader: {
            fontSize: number;
            color: string;
            marginBottom: string;
        };
        navBarHeaderLight: {
            fontSize: number;
            color: string;
        };
        primaryButton: {
            fontSize: number;
            color: string;
            paddingHorizontal: string;
            textTransform: string;
        };
        defaultButton: {
            fontSize: number;
            color: string;
            textTransform: string;
        };
        smallPrimaryButton: {
            fontSize: number;
            paddingHorizontal: string;
            textTransform: string;
            color: string;
        };
        smallDefaultButton: {
            fontSize: number;
            color: string;
            textTransform: string;
        };
    };
    boxVariants: {
        elevated: {
            padding: {
                phone: string;
                tablet: string;
            };
            shadowColor: string;
            shadowOpacity: number;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowRadius: number;
            elevation: number;
        };
    };
    buttonVariants: {
        defaults: {
            height: number;
            borderWidth: number;
            alignItems: string;
            justifyContent: string;
            paddingHorizontal: string;
            marginEnd: string;
            borderColor: string;
            borderRadius: number;
        };
        primary: {
            backgroundColor: string;
        };
        secondary: {
            backgroundColor: string;
        };
        listPrimary: {
            height: number;
            paddingHorizontal: string;
            backgroundColor: string;
        };
        listSecondary: {
            height: number;
            paddingHorizontal: string;
            backgroundColor: string;
        };
    };
    cardsVariant: {
        defaults: {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
            borderColor: string;
            borderWidth: number;
            borderRadius: number;
            padding: string;
        };
        small: {
            width: number;
        };
        medium: {
            width: number;
        };
        large: {
            width: number;
        };
        row: {
            width: number;
        };
        floating: {
            height: number;
            borderRadius: number;
            paddingHorizontal: string;
            paddingVertical: string;
        };
    };
    avatarVariants: {
        small: {
            width: number;
            height: number;
        };
        medium: {
            width: number;
            height: number;
        };
        large: {
            width: number;
            height: number;
        };
    };
    dividerVariants: {
        small: {
            height: number;
            color: string;
            width: string;
        };
    };
    iconVariants: {
        small: {
            width: number;
            height: number;
        };
        medium: {
            width: number;
            height: number;
        };
    };
    measure: {
        GUTTER: number;
        ISTABLET: boolean;
        FONT_SIZE: {
            SMALL: number;
            REGULAR: number;
            MEDIUM: number;
            LARGE: number;
            XLARGE: number;
        };
        SCALER: import("../library/utils").Scaler;
        WINDOW: {
            WIDTH: number;
            HEIGHT: number;
        };
        SIZE: {
            MEDIUMSMALL: number;
            REGULAR: number;
            MEDIUM: number;
            LARGE: number;
            XLARGE: number;
        };
    };
};
export { all as allRestyleFunctions } from '@shopify/restyle';
export type Theme = typeof theme;
export type Color = keyof (typeof theme)['colors'];
export type AllRestylePropsWithoutVariantProps = AllProps<Theme> & VisibleProps<Theme> & PropsWithChildren;
export type RestyleProps<T extends keyof Theme | void = void> = T extends keyof Theme ? AllRestylePropsWithoutVariantProps & VariantProps<Theme, T> : AllRestylePropsWithoutVariantProps;
export default theme;
