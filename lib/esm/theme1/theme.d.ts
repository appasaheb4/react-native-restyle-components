import React from 'react';
import { Colors, Typography } from './';
export interface ThemeProps {
    isDark: boolean;
    colors: Colors.ColorProps;
    typography: Typography.Typography;
}
export declare const ThemeContext: React.Context<{
    isDark: boolean;
    colors: {
        primary: string;
        white: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        primaryText: string;
        green: string;
        swipeBgGreen: string;
        inActiveGreen: string;
        blue: string;
        inActiveBlue: string;
        red: string;
        pink: string;
        orange: string;
        gold: string;
        teal: string;
        shadowColor: string;
        transparentPrimary: string;
        toastErrorColor: string;
        firstGradientColor: string;
        secondGradientColor: string;
        black: string;
        warningColor: string;
        secondaryColor: string;
        secondaryBlack: string;
        gradient2: string;
    };
    typography: {
        interBold: {
            fontFamily: string;
        };
        interMedium: {
            fontFamily: string;
        };
        robotoBold: {
            fontFamily: string;
        };
        robotoMedium: {
            fontFamily: string;
        };
        robotoRegular: {
            fontFamily: string;
        };
    };
}>;
export interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
}
export declare const ThemeProvider: (props: ThemeProviderProps) => React.JSX.Element;
export declare const useTheme: () => {
    isDark: boolean;
    colors: {
        primary: string;
        white: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        primaryText: string;
        green: string;
        swipeBgGreen: string;
        inActiveGreen: string;
        blue: string;
        inActiveBlue: string;
        red: string;
        pink: string;
        orange: string;
        gold: string;
        teal: string;
        shadowColor: string;
        transparentPrimary: string;
        toastErrorColor: string;
        firstGradientColor: string;
        secondGradientColor: string;
        black: string;
        warningColor: string;
        secondaryColor: string;
        secondaryBlack: string;
        gradient2: string;
    };
    typography: {
        interBold: {
            fontFamily: string;
        };
        interMedium: {
            fontFamily: string;
        };
        robotoBold: {
            fontFamily: string;
        };
        robotoMedium: {
            fontFamily: string;
        };
        robotoRegular: {
            fontFamily: string;
        };
    };
};
