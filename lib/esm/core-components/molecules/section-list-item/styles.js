import { CreateResponsiveStyle, } from 'rn-responsive-styles';
export default ({ colors }) => {
    return CreateResponsiveStyle({
        title: {
            fontWeight: 'bold',
            fontSize: 16,
            color: colors.primaryText,
            marginVertical: 6,
        },
        listItemWrapper: {
            marginHorizontal: 6,
            padding: 14,
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