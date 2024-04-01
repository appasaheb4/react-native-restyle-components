/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';

//import {OtpVerify, Dropdown, StepperGradient} from 'react-native-restyle-components'; // use like this

import {OtpVerify, Dropdown, StepperGradient} from './lib/cjs/core-components';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 10}}>
        <ThemeProvider theme={theme}>
          <OtpVerify
            onVerify={otp => {
              console.log({otp});
            }}
          />
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
          <StepperGradient
            active={1}
            colors={['#0687B4', '#D92CC1']}
            stepperSize={14}
            content={['Your Cart', 'About You', 'Payment']}
          />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
