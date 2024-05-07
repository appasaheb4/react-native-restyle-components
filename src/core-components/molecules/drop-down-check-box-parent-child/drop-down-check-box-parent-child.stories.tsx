import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {DropDownCheckBoxParentChild} from './drop-down.check-box-parent-child.component';

const DropDownCheckBoxParentChildMeta: Meta<
  typeof DropDownCheckBoxParentChild
> = {
  title: 'Design System/Molecules/DropDownCheckBoxParentChild',
  component: DropDownCheckBoxParentChild,
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    componentSubtitle: `import { DropDownCheckBoxParentChild } from 'react-native-restyle-components'`,
  },
};

export default DropDownCheckBoxParentChildMeta;
export const Basic: StoryObj<typeof DropDownCheckBoxParentChildMeta> = {
  args: {
    title: 'Business List *',
    data: [
      [
        {
          'Parent Category 1': [
            {title: 'Sub-Category 1', selected: false},
            {title: 'Sub-Category 2', selected: false},
          ],
          selected: false,
        },
      ],
      [
        {
          'Parent Category 2': [
            {title: 'Sub-Category 1', selected: false},
            {title: 'Sub-Category 2', selected: false},
          ],
          selected: false,
        },
      ],
      [
        {
          'Parent Category 3': [
            {title: 'Sub-Category 1', selected: false},
            {title: 'Sub-Category 2', selected: false},
          ],
          selected: false,
        },
      ],
    ],
    onChange: item => {
      console.log({item});
    },
  },
};
