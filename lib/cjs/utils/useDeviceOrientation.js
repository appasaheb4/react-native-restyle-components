"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceOrientation = void 0;
/* eslint-disable @typescript-eslint/no-shadow */
const react_1 = require("react");
const react_native_1 = require("react-native");
const isOrientationPortrait = ({ width, height }) => height >= width;
const isOrientationLandscape = ({ width, height }) => width >= height;
function useDeviceOrientation() {
    const screen = react_native_1.Dimensions.get('screen');
    const initialState = {
        portrait: isOrientationPortrait(screen),
        landscape: isOrientationLandscape(screen),
    };
    const [orientation, setOrientation] = (0, react_1.useState)(initialState);
    (0, react_1.useEffect)(() => {
        const onChange = ({ screen }) => {
            setOrientation({
                portrait: isOrientationPortrait(screen),
                landscape: isOrientationLandscape(screen),
            });
        };
        const subscription = react_native_1.Dimensions.addEventListener('change', onChange);
        return () => {
            if (typeof (subscription === null || subscription === void 0 ? void 0 : subscription.remove) === 'function') {
                subscription.remove();
            }
        };
    }, []);
    return orientation.portrait ? 'PORTRAIT' : 'LANDSCAPE';
}
exports.useDeviceOrientation = useDeviceOrientation;
//# sourceMappingURL=useDeviceOrientation.js.map