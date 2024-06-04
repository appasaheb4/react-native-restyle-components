import {View} from 'react-native';
import type {Meta, StoryObj} from '@storybook/react';
import {SectionListItem} from './section-list-item.component';

const SectionListItemMeta: Meta<typeof SectionListItem> = {
  title: 'Design System/Molecules/SectionListItem',
  component: SectionListItem,
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 10}}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    componentSubtitle: `import { SectionListItem } from 'react-native-restyle-components'`,
  },
};

export default SectionListItemMeta;
export const Basic: StoryObj<typeof SectionListItemMeta> = {
  args: {
    data: [
      {
        title: 'Today, Thursday, May 5',
        key: 'May 5',
        data: [
          {
            key: 'time',
            list: [
              {title: '10:30', period: 'AM'},
              {title: '11:30', period: 'AM'},
              {title: '12:30', period: 'AM'},
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
              {title: '10:30', period: 'AM'},
              {title: '11:30', period: 'AM'},
              {title: '12:30', period: 'AM'},
              {title: '01:30', period: 'AM'},
            ],
          },
        ],
      },
      {
        title: 'Saturday, May 7',
        key: 'May 7',
        data: [{key: 'time', list: []}],
      },
      {
        title: 'Sunday, May 8',
        data: [
          {
            key: 'time',
            list: [
              {title: '10:30', period: 'AM'},
              {title: '11:30', period: 'AM'},
              {title: '12:30', period: 'AM'},
            ],
          },
        ],
      },
    ],
    onChange: item => {
      console.log({item});
    },
  },
};
