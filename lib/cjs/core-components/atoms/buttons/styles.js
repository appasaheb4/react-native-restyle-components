"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rn_responsive_styles_1 = require("rn-responsive-styles");
exports.default = ({ colors }) => {
    return (0, rn_responsive_styles_1.CreateResponsiveStyle)({
        buttonStyle: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.white,
            shadowColor: colors.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        titleStyle: {
            marginHorizontal: 40,
        },
    })();
};
//# sourceMappingURL=styles.js.map