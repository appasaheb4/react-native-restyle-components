export default ({ colors, typography }) => {
    return {
        text: {
            fontSize: 14,
            color: colors.gray5,
            marginBottom: 6,
        },
        warperView: {
            flexDirection: 'row',
            marginVertical: 6,
            alignItems: 'center',
        },
        radioCycle: {
            width: 24,
            height: 24,
            borderRadius: 24,
            borderColor: colors.black,
        },
    };
};
