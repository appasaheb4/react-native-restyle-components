# react-native-restyle-components

Easy use restyle components

## Installation

```
npm i react-native-restyle-components
or
yarn add react-native-restyle-components
```

<!-- ### Please configuration @shopify/restyle theme before

How to configuration: https://www.youtube.com/watch?v=jN_cgBZI2Lg <br />
more: https://github.com/Shopify/restyle#readme <br />
theme folders check: https://github.com/appasaheb4/react-native-restyle-components/tree/master/src/theme -->

<!-- ## How to use
### check App.tsx file : <a href="https://github.com/appasaheb4/react-native-restyle-components/blob/master/App.tsx">App.tsx</a> -->
<!-- ## Output
<img src="https://github.com/appasaheb4/react-native-restyle-components/blob/master/src/library/assets/npmInfo/appScreen.png" width="200"> -->

## How to use restyle components

import {OtpVerify, Dropdown, StepperGradient} from 'react-native-restyle-components';

```
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
```

Much more components available in storybook 🙂

### 📚 Like this storybook coming soon for React-Native

https://appasaheb4.github.io/react-restyle-components

### 🌎📧 Contact Details

☆━━━━━━━━━━━━━━━━━━━☆☆━━━━━━━━━━━━━━━━━━━☆
Mobile No: +91 9260303151 <br />
Email Id: onlyappasaheb4@gmail.com <br />
Github: www.github.com/appasaheb4 <br />
Website: www.tech-abl.com
☆━━━━━━━━━━━━━━━━━━━☆☆━━━━━━━━━━━━━━━━━━━☆

## Contributes / Support

1.  More content: https://www.youtube.com/@techabl
2.  Submit your pr for idea / issue / feature
    ### How To Contribute
        - Fork and clone this repository
        - Make some changes as required
        - Write unit test to showcase its functionality
        - Run the test suites to make sure it's not breaking anything `$ npm test`
        - Submit a pull request under `dev` branch

😊 ALWAYS WELCOME 😊
