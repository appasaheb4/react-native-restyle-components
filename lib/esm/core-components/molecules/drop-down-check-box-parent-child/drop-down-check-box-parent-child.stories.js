import { View } from 'react-native';
import { DropDownCheckBoxParentChild } from './drop-down.check-box-parent-child.component';
const fn = (item) => {
    console.log({ item });
};
const DropDownCheckBoxParentChildMeta = {
    title: 'Design System/Molecules/DropDownCheckBoxParentChild',
    component: DropDownCheckBoxParentChild,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
};
export default DropDownCheckBoxParentChildMeta;
export const Basic = {
    args: {
        title: 'Business Unit *',
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