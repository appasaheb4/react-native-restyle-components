"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const drop_down_check_box_parent_child_component_1 = require("./drop-down.check-box-parent-child.component");
const DropDownCheckBoxParentChildMeta = {
    title: 'Design System/Molecules/DropDownCheckBoxParentChild',
    component: drop_down_check_box_parent_child_component_1.DropDownCheckBoxParentChild,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
    parameters: {
        componentSubtitle: `import { DropDownCheckBoxParentChild } from 'react-native-restyle-components'`,
    },
};
exports.default = DropDownCheckBoxParentChildMeta;
exports.Basic = {
    args: {
        title: 'Business List *',
        data: [
            [
                {
                    'Parent Category 1': [
                        { title: 'Sub-Category 1', selected: false },
                        { title: 'Sub-Category 2', selected: false },
                    ],
                    selected: false,
                },
            ],
            [
                {
                    'Parent Category 2': [
                        { title: 'Sub-Category 1', selected: false },
                        { title: 'Sub-Category 2', selected: false },
                    ],
                    selected: false,
                },
            ],
            [
                {
                    'Parent Category 3': [
                        { title: 'Sub-Category 1', selected: false },
                        { title: 'Sub-Category 2', selected: false },
                    ],
                    selected: false,
                },
            ],
        ],
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=drop-down-check-box-parent-child.stories.js.map