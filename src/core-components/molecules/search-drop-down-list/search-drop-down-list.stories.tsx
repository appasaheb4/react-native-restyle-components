import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {SearchDropDownList} from './search-drop-down-list.component';

const SearchDropDownListMeta: Meta<typeof SearchDropDownList> = {
  title: 'Design System/Molecules/SearchDropDownList',
  component: SearchDropDownList,
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    componentSubtitle: `import { SearchDropDownList } from 'react-native-restyle-components'`,
  },
};

export default SearchDropDownListMeta;
export const Basic: StoryObj<typeof SearchDropDownListMeta> = {
  args: {
    title: 'Users',
    list: [
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
    placeholder: 'Search',
    displayValue: 'Select',
    onSearch: text => {
      console.log({text});
    },
    onSelect: item => {
      console.log({item});
    },
  },
};
