import { CreateResponsiveStyle } from 'rn-responsive-styles';
export default ({ colors }) => {
    return CreateResponsiveStyle({
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
