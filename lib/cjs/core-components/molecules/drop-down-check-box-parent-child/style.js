"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ colors, typography }) => {
    return {
        text: {
            fontSize: 14,
            color: colors.gray5,
            marginBottom: 6,
        },
        warperView: {
            flexDirection: 'row',
            padding: 10,
            height: 56,
            borderRadius: 10,
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
        radioCycle: {
            width: 24,
            height: 24,
            borderRadius: 24,
            borderColor: colors.black,
        },
        optionView: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        flatListWarperView: {
            marginTop: 4,
            position: 'absolute',
            top: 80,
            right: 0,
            left: 0,
            zIndex: 999,
            shadowColor: colors.black,
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.26,
            shadowRadius: 3,
            elevation: 10,
        },
        flatListView: {
            borderRadius: 10,
            backgroundColor: colors.white,
            shadowColor: colors.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.26,
            shadowRadius: 3,
            elevation: 10,
            padding: 20,
        },
    };
};
//# sourceMappingURL=style.js.map