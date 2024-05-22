export default ({ colors, typography }) => {
    return {
        text: {
            fontSize: 14,
            color: colors.gray5,
            marginBottom: 10,
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
        square: {
            width: 20,
            height: 20,
            borderRadius: 5,
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
        },
        flatListView: {
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
            padding: 10,
        },
    };
};
//# sourceMappingURL=style.js.map