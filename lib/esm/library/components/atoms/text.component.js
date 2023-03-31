var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Text as RNText } from 'react-native';
import { color, opacity, visible, typography, spacing, spacingShorthand, textShadow, useRestyle, createVariant, } from '@shopify/restyle';
const textVariants = createVariant({ themeKey: 'textVariants' });
const restyleFunctions = [
    textVariants,
    spacing,
    color,
    opacity,
    visible,
    typography,
    spacingShorthand,
    textShadow,
];
export const Text = (_a) => {
    var { testID, children } = _a, rest = __rest(_a, ["testID", "children"]);
    const props = useRestyle(restyleFunctions, rest);
    return (<RNText allowFontScaling={false} {...props} testID={testID}>
      {children}
    </RNText>);
};
export const TextRN = (_a) => {
    var { testID, style, children } = _a, rest = __rest(_a, ["testID", "style", "children"]);
    const props = useRestyle(restyleFunctions, rest);
    return (<RNText allowFontScaling={false} {...props} testID={testID} style={style}>
      {children}
    </RNText>);
};
//# sourceMappingURL=text.component.js.map