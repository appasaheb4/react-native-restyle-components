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
import {SafeAreaView, StatusBar, View} from 'react-native';
// here you can use  'react-native-restyle-components' not './src/library/components'
import {OtpVerify, Dropdown} from './src/library/components';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1}}>
        <OtpVerify
          onVerify={otp => {
            console.log({otp});
          }}
        />
        <View style={{marginTop: 40}} />
        <Dropdown
          label={'Product Type'}
          onSelect={item => {
            console.log({item});
          }}
          data={[
            {label: 'tech abl', value: 'tech abl'},
            {label: 'github.com/appasaheb4', value: 'github.com/appasaheb4'},
          ]}
          displayKey="label"
          testID="PROD-TYPE"
          zIndex={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
