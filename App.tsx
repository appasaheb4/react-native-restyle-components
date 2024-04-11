import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {useTheme} from './src/theme1';
//import {OtpVerify, Dropdown, StepperGradient} from 'react-native-restyle-components'; // use like this
import {
  OtpVerify,
  Dropdown,
  StepperGradient,
  Button,
  CheckBox,
  DropDownCheckBoxParentChild,
} from './lib/cjs/core-components';

function App(): JSX.Element {
  const theme1 = useTheme();
  const [businessList, setBusinessList] = useState([
    [
      {
        'Parent Category 1': [
          {title: 'Sub-Category 1', selected: false},
          {title: 'Sub-Category 2', selected: false},
        ],
        selected: false,
      },
    ],
    [
      {
        'Parent Category 2': [
          {title: 'Sub-Category 1', selected: false},
          {title: 'Sub-Category 2', selected: false},
        ],
        selected: false,
      },
    ],
    [
      {
        'Parent Category 3': [
          {title: 'Sub-Category 1', selected: false},
          {title: 'Sub-Category 2', selected: false},
        ],
        selected: false,
      },
    ],
  ]);
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
          <Button title="Cancel" onPress={() => {}} />
          <Button
            buttonStyle={{
              backgroundColor: theme1.colors.primary,
              marginTop: 10,
              marginBottom: 10,
            }}
            titleStyle={{color: theme1.colors.white}}
            isDisabled={true}
            title="Save"
            onPress={() => {}}
          />
          <CheckBox
            title="Services"
            list={[
              {title: 'Web', selected: true},
              {title: 'Mobile', selected: false},
            ]}
            onChange={item => {
              console.log({item});
            }}
          />
          <DropDownCheckBoxParentChild
            title="Business Unit *"
            list={businessList}
            onChange={item => {}}
          />
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
