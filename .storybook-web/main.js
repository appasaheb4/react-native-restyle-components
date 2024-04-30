module.exports = {
  stories: [
    '../src/core-components/**/*.stories.stories.mdx',
    '../src/core-components/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
};
