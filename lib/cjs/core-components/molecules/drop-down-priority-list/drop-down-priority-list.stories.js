"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const drop_down_priority_list_component_1 = require("./drop-down-priority-list.component");
const DropDownPriorityListMeta = {
    title: 'Design System/Molecules/DropDownPriorityList',
    component: drop_down_priority_list_component_1.DropDownPriorityList,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
};
exports.default = DropDownPriorityListMeta;
exports.Basic = {
    args: {
        title: 'Priority',
        data: [
            {
                color: '#5AC47D',
                title: 'Low',
            },
            {
                color: '#F2AD53',
                title: 'Medium',
            },
            {
                color: '#AD3F55',
                title: 'High',
            },
        ],
        displayKey: 'title',
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=drop-down-priority-list.stories.js.map