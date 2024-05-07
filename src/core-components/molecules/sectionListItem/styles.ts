import {
  CreateResponsiveStyle,
  DEVICE_SIZES,
  minSize,
} from 'rn-responsive-styles';
import {ThemeProps} from '../../../theme1';

export default ({colors}: ThemeProps) => {
  return CreateResponsiveStyle({
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.primaryText,
    },
    listItemWrapper: {
      padding: 14,
      margin: 10,
      borderRadius: 10,
      borderColor: colors.gray8,
      borderWidth: 0.8,
    },
    bottomSeparateView: {
      height: 10,
      borderBottomColor: colors.gray8,
      borderBottomWidth: 0.4,
      marginBottom: 20,
    },
    emptyText: {
      marginVertical: 20,
      borderBottomColor: colors.gray8,
      borderBottomWidth: 0.4,
      paddingBottom: 20,
    },
  })();
};
