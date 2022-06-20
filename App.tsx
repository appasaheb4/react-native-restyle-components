/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {OtpVerify} from './src/library/components';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{flex: 1, backgroundColor: '#000000', alignItems: 'center'}}>
          <OtpVerify
            onVerify={otp => {
              console.log({otp});
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
