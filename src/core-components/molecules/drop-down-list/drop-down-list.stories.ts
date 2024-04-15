import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {DropDownList} from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DropDownList> = {
  title: 'Example/DropDownList',
  component: DropDownList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropDownList>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Primary',
    list: [],
    displayKey: 'title',
    onChange: fn(),
  },
};
