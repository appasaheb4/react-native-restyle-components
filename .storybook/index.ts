import AsyncStorage from '@react-native-async-storage/async-storage';
import {view} from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  // onDeviceUI: false,
  // port: 7008,
  // host: '192.168.1.3',
});

export default StorybookUIRoot;
