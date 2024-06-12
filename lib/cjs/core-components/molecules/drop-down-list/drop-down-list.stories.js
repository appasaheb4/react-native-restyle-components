"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const drop_down_list_component_1 = require("./drop-down-list.component");
const DropDownListMeta = {
    title: 'Design System/Molecules/DropDownList',
    component: drop_down_list_component_1.DropDownList,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
    parameters: {
        componentSubtitle: `import { DropDownList } from 'react-native-restyle-components'`,
    },
};
exports.default = DropDownListMeta;
exports.Basic = {
    args: {
        title: 'Task List *',
        data: [
            {
                title: 'HVAC Repair',
            },
            {
                title: 'AC Repair',
            },
            {
                title: 'Fridge Repair',
            },
        ],
        displayKey: 'title',
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=drop-down-list.stories.js.map