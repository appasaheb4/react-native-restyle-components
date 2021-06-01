import { createIconSet } from 'react-native-vector-icons';
const glyphMapLineawesome = require('../../assets/glyphmaps/LineAwesome.json');
export const LineAwesomeIconSet = createIconSet(glyphMapLineawesome, 'lineawesome', 'LineAwesome.ttf');
export const LineAwesome = ({ icon, size = 20, color = 'black' }) => (React.createElement(LineAwesomeIconSet, { name: icon, size: size, color: color.toString() }));
//# sourceMappingURL=Icons.js.map