"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const react_native_1 = require("react-native");
const section_list_item_component_1 = require("./section-list-item.component");
const SectionListItemMeta = {
    title: 'Design System/Molecules/SectionListItem',
    component: section_list_item_component_1.SectionListItem,
    decorators: [
        Story => (<react_native_1.View style={{ flex: 1, padding: 10 }}>
        <Story />
      </react_native_1.View>),
    ],
    parameters: {
        componentSubtitle: `import { SectionListItem } from 'react-native-restyle-components'`,
    },
};
exports.default = SectionListItemMeta;
exports.Basic = {
    args: {
        data: [
            {
                title: 'Today, Thursday, May 5',
                key: 'May 5',
                data: [
                    {
                        key: 'time',
                        list: [
                            { title: '10:30 AM' },
                            { title: '11:30 AM' },
                            { title: '12:30 PM' },
                        ],
                    },
                ],
            },
            {
                title: 'Friday, May 6',
                key: 'May 6',
                data: [
                    {
                        key: 'time',
                        list: [
                            { title: '10:30 AM' },
                            { title: '11:30 AM' },
                            { title: '12:30 PM' },
                            { title: '01:30 PM' },
                        ],
                    },
                ],
            },
            {
                title: 'Saturday, May 7',
                key: 'May 7',
                data: [{ key: 'time', list: [] }],
            },
            {
                title: 'Sunday, May 8',
                data: [
                    {
                        key: 'time',
                        list: [
                            { title: '10:30 AM' },
                            { title: '11:30 AM' },
                            { title: '12:30 PM' },
                        ],
                    },
                ],
            },
        ],
        onChange: item => {
            console.log({ item });
        },
    },
};
//# sourceMappingURL=section-list-item.stories.js.map