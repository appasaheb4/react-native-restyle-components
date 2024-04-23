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

import {DropDownList, StepperGradient} from 'react-native-restyle-components';

```
         <DropDownList
                title="Task *"
                data={[
                  {
                    title: 'HVAC Repair',
                  },
                  {
                    title: 'AC Repair',
                  },
                  {
                    title: 'Fridge Repair',
                  },
                ]}
                displayKey="title"
                onChange={(item: any) => {
                  console.log({item});
                }}
              />
        <StepperGradient
            active={1}
            colors={['#0687B4', '#D92CC1']}
            stepperSize={14}
            content={['Your Cart', 'About You', 'Payment']}
          />
```

Much more components available in storybook 🙂

### 📚 Like this check storybook in React-Native

```
git clone https://github.com/appasaheb4/react-native-restyle-components
cd react-native-restyle-components
yarn install
yarn android
```

### 🌎📧 Contact Details

☆━━━━━━━━━━━━━━━━━━━☆☆━━━━━━━━━━━━━━━━━━━☆
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
