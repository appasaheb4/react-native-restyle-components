"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
const drop_down_component_1 = require("./drop-down.component");
describe('Dropdown', () => {
    it('should render error hero card correctly', () => {
        const dropdown = (0, react_native_1.render)(<drop_down_component_1.Dropdown label="Product Type" data={[]} onSelect={() => jest.fn()}/>);
        expect(dropdown).toMatchSnapshot();
    });
});
//# sourceMappingURL=drop-down.component.test.js.map