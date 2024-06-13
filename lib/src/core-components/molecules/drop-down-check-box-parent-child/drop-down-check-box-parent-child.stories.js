import { View } from 'react-native';
import { DropDownCheckBoxParentChild } from './drop-down.check-box-parent-child.component';
const DropDownCheckBoxParentChildMeta = {
    title: 'Design System/Molecules/DropDownCheckBoxParentChild',
    component: DropDownCheckBoxParentChild,
    decorators: [
        Story => (<View style={{ flex: 1, padding: 10 }}>
        <Story />
      </View>),
    ],
    parameters: {
        componentSubtitle: `import { DropDownCheckBoxParentChild } from 'react-native-restyle-components'`,
    },
};
export default DropDownCheckBoxParentChildMeta;
export const Basic = {
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
                        { title: 'Sub-Category 3', selected: false },
                        { title: 'Sub-Category 4', selected: false },
                    ],
                    selected: false,
                },
            ],
            [
                {
                    'Parent Category 3': [
                        { title: 'Sub-Category 5', selected: false },
                        { title: 'Sub-Category 6', selected: false },
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
