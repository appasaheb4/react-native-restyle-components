const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const {generate} = require('@storybook/react-native/scripts/generate');
generate({
  configPath: path.resolve(__dirname, './.ondevice'),
});
const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    unstable_allowRequireContext: true,
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'mjs'],
    resolveRequest: (context, moduleName, platform) => {
      const defaultResolveResult = context.resolveRequest(
        context,
        moduleName,
        platform,
      );
      if (
        process.env.STORYBOOK_ENABLED !== 'true' &&
        defaultResolveResult?.filePath?.includes?.('.ondevice/')
      ) {
        return {
          type: 'empty',
        };
      }
      return defaultResolveResult;
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
