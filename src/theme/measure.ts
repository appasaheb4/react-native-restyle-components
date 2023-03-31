import {Scaler} from '@/library/utils';
import {Dimensions} from 'react-native';

const DOCUMENT_WIDTH = 380;
const scaler = new Scaler(DOCUMENT_WIDTH);

export const measure = {
  GUTTER: scaler.getScaledValue(10),
  ISTABLET:
    Dimensions.get('window').width / Dimensions.get('window').height > 0.6,
  FONT_SIZE: {
    SMALL: scaler.getScaledValue(7),
    REGULAR: scaler.getScaledValue(8),
    MEDIUM: scaler.getScaledValue(10),
    LARGE: scaler.getScaledValue(14),
    XLARGE: scaler.getScaledValue(18),
  },
  SCALER: scaler,
  WINDOW: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  SIZE: {
    MEDIUMSMALL: scaler.getScaledValue(7),
    REGULAR: scaler.getScaledValue(8),
    MEDIUM: scaler.getScaledValue(10),
    LARGE: scaler.getScaledValue(14),
    XLARGE: scaler.getScaledValue(18),
  },
};
export type MEASURE = typeof measure;
