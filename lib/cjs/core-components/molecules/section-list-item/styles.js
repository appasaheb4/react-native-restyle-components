"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rn_responsive_styles_1 = require("rn-responsive-styles");
exports.default = ({ colors }) => {
    return (0, rn_responsive_styles_1.CreateResponsiveStyle)({
        title: {
            fontWeight: 'bold',
            fontSize: 18,
            color: colors.primaryText,
            fontFamily: 'Roboto',
        },
        listItemWrapper: {
            textAlign: 'center',
            paddingVertical: 14,
            borderRadius: 10,
            borderColor: colors.gray8,
            borderWidth: 0.8,
        },
        bottomSeparateView: {
            height: 10,
            borderBottomColor: colors.gray8,
            borderBottomWidth: 0.4,
        },
        emptyText: {
            marginVertical: 20,
            borderBottomColor: colors.gray8,
            borderBottomWidth: 0.4,
            paddingBottom: 20,
        },
    })();
};
//# sourceMappingURL=styles.js.map