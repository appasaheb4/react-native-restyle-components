import React from 'react';
import { createIconSet } from 'react-native-vector-icons';
const glyphMapLineawesome = require('../../../library/assets/glyphmaps/LineAwesome.json');
export const LineAwesomeIconSet = createIconSet(glyphMapLineawesome, 'lineawesome', 'LineAwesome.ttf');
export const LineAwesome = ({ icon, size = 20, color = 'black' }) => (<LineAwesomeIconSet name={icon} size={size} color={color.toString()}/>);
//# sourceMappingURL=icons.component.js.map