export default ({ colors, typography }) => {
    return {
        text: {
            fontSize: 14,
            color: colors.gray5,
            marginBottom: 10,
        },
        warperView: {
            flex: 1,
            flexDirection: 'row',
            borderRadius: 8,
            padding: 8,
            height: 56,
            borderColor: colors.gray3,
            borderWidth: 1,
            alignItems: 'center',
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
            padding: 16,
            maxHeight: 400,
        },
    };
};
