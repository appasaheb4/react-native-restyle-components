import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {DropDownPriorityList} from './drop-down-priority-list.component';

const DropDownPriorityListMeta: Meta<typeof DropDownPriorityList> = {
  title: 'Design System/Molecules/DropDownPriorityList',
  component: DropDownPriorityList,
  decorators: [
    Story => (
      <View style={{flex: 1,  padding: 10}}>
        <Story />
      </View>
    ),
  ],
};
  
export default DropDownPriorityListMeta;
export const Basic: StoryObj<typeof DropDownPriorityListMeta> = {
  args: {
    title:'Priority',
    data:[
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
    displayKey:'title',
    onChange: item => {
      console.log({item});
    },
  },
};
