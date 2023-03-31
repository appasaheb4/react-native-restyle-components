import { createTheme } from '@shopify/restyle';
import { palette } from './palette';
//import {fonts} from './Fonts';
import { DeviceHelper } from '@/library/utils';
import { measure } from './measure';
export const theme = createTheme({
    colors: Object.assign({}, palette),
    spacing: {
        minm: -20,
        none: 0,
        xs: 2,
        ss: 5,
        sm: 10,
        md: 12,
        m: 15,
        l: 16,
        lg: 20,
        xl: 30,
        xxl: 50,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        h1: {
            fontSize: 20,
            color: 'primary',
        },
        h2: {
            fontSize: 18,
            color: 'primary',
        },
        textHeader: {
            fontSize: 16,
            color: 'black',
        },
        textHeaderBold: {
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
        },
        bodyText: {
            fontSize: 14,
            color: 'black',
        },
        bodyTextBold: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        bodyTextWhite: {
            fontSize: 16,
            color: 'primary',
        },
        bodyTextRegular: {
            fontSize: 16,
            color: 'primary',
        },
        bodyTextSmall: {
            fontSize: 14,
            color: 'primary',
        },
        bodyTextSmallWhite: {
            fontSize: 14,
            color: 'primary',
        },
        caption: {
            fontSize: 12,
            color: 'primary',
        },
        hyperLinkOrange: {
            color: 'primary',
            fontSize: 16,
        },
        hyperLinkBlue: {
            color: 'primary',
            fontSize: 16,
        },
        sectionHeader: {
            fontSize: 18,
            color: 'primary',
            marginBottom: 'lg',
        },
        navBarHeaderLight: {
            fontSize: 20,
            color: 'white',
        },
        primaryButton: {
            fontSize: 16,
            color: 'white',
            paddingHorizontal: 'lg',
            textTransform: 'capitalize',
        },
        defaultButton: {
            fontSize: 16,
            color: 'limsPlusGrey',
            textTransform: 'capitalize',
        },
        smallPrimaryButton: {
            fontSize: 12,
            paddingHorizontal: 'sm',
            textTransform: 'uppercase',
            color: 'white',
        },
        smallDefaultButton: {
            fontSize: 12,
            color: 'limsPlusGrey',
            textTransform: 'uppercase',
        },
    },
    boxVariants: {
        elevated: {
            padding: {
                phone: 's',
                tablet: 'm',
            },
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 15,
            elevation: 5,
        },
    },
    buttonVariants: {
        defaults: {
            height: 50,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 'lg',
            marginEnd: 'sm',
            borderColor: 'limsPlusGrey',
            borderRadius: 10,
        },
        primary: {
            backgroundColor: 'limsPlusGrey',
        },
        secondary: {
            backgroundColor: 'white',
        },
        listPrimary: {
            height: 34,
            paddingHorizontal: 'sm',
            backgroundColor: 'limsPlusGrey',
        },
        listSecondary: {
            height: 34,
            paddingHorizontal: 'sm',
            backgroundColor: 'white',
        },
    },
    cardsVariant: {
        defaults: {
            shadowColor: 'limsPlusGrey',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 9,
            borderColor: 'limsPlusGrey5',
            borderWidth: 1,
            borderRadius: 10,
            padding: 'lg',
        },
        small: {
            width: DeviceHelper.calculateWidthRatio(232),
        },
        medium: {
            width: DeviceHelper.calculateWidthRatio(301),
        },
        large: {
            width: DeviceHelper.calculateWidthRatio(286),
        },
        row: {
            width: DeviceHelper.calculateWidthRatio(373),
        },
        floating: {
            height: 50,
            borderRadius: 50,
            paddingHorizontal: 'lg',
            paddingVertical: 'none',
        },
    },
    avatarVariants: {
        small: {
            width: DeviceHelper.calculateWidthRatio(40),
            height: DeviceHelper.calculateWidthRatio(40),
        },
        medium: {
            width: DeviceHelper.calculateWidthRatio(55),
            height: DeviceHelper.calculateWidthRatio(55),
        },
        large: {
            width: DeviceHelper.calculateWidthRatio(70),
            height: DeviceHelper.calculateWidthRatio(70),
        },
    },
    dividerVariants: {
        small: {
            height: 1,
            color: 'limsPlusGrey6',
            width: '100%',
        },
    },
    iconVariants: {
        small: {
            width: DeviceHelper.calculateWidthRatio(25),
            height: DeviceHelper.calculateWidthRatio(25),
        },
        medium: {
            width: DeviceHelper.calculateWidthRatio(50),
            height: DeviceHelper.calculateWidthRatio(50),
        },
    },
    measure,
});
export default theme;
//# sourceMappingURL=theme.js.map