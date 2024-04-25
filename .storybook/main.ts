import {StorybookConfig} from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    // './stories/**/*.stories.?(ts|tsx|js|jsx)'
    '../src/core-components/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-react-native-web',
    '@storybook/addon-essentials',
  ],
};

export default main;
