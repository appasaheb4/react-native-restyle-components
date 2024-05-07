import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {DropDownList} from './drop-down-list.component';

const DropDownListMeta: Meta<typeof DropDownList> = {
  title: 'Design System/Molecules/DropDownList',
  component: DropDownList,
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
};

export default DropDownListMeta;
export const Basic: StoryObj<typeof DropDownListMeta> = {
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
      console.log({item});
    },
  },
};
