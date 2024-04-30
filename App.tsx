// import React, {useState} from 'react';
// import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
// import {ThemeProvider} from '@shopify/restyle';
// import {theme} from './src/theme';
// import {useTheme} from './src/theme1';
// //import {OtpVerify, Dropdown, StepperGradient} from 'react-native-restyle-components'; // use like this
// import {
//   DropDownList,
//   OtpVerify,
//   StepperGradient,
//   Button,
//   CheckBox,
//   DropDownCheckBoxParentChild,
// } from './lib/cjs/core-components';

// function App(): JSX.Element {
//   const theme1 = useTheme();
//   const [businessList, setBusinessList] = useState([
//     [
//       {
//         'Parent Category 1': [
//           {title: 'Sub-Category 1', selected: false},
//           {title: 'Sub-Category 2', selected: false},
//         ],
//         selected: false,
//       },
//     ],
//     [
//       {
//         'Parent Category 2': [
//           {title: 'Sub-Category 1', selected: false},
//           {title: 'Sub-Category 2', selected: false},
//         ],
//         selected: false,
//       },
//     ],
//     [
//       {
//         'Parent Category 3': [
//           {title: 'Sub-Category 1', selected: false},
//           {title: 'Sub-Category 2', selected: false},
//         ],
//         selected: false,
//       },
//     ],
//   ]);
//   return (
//     <SafeAreaView style={{zIndex: 0}}>
//       <StatusBar barStyle={'light-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={{padding: 10, zIndex: 0}}>
//         <ThemeProvider theme={theme}>
//           <View style={{flex: 1, padding: 8, zIndex: 0}}>
//             <View style={{marginVertical: 10, zIndex: 6}}>
//               <DropDownCheckBoxParentChild
//                 title="Business Unit *"
//                 data={businessList}
//                 onChange={item => {}}
//               />
//             </View>
//             <OtpVerify
//               onVerify={otp => {
//                 console.log({otp});
//               }}
//             />
//             <StepperGradient
//               active={1}
//               colors={['#0687B4', '#D92CC1']}
//               stepperSize={14}
//               content={['Your Cart', 'About You', 'Payment']}
//             />
//             <Button title="Cancel" onPress={() => {}} />
//             <Button
//               buttonStyle={{
//                 backgroundColor: theme1.colors.primary,
//                 marginTop: 10,
//                 marginBottom: 10,
//               }}
//               titleStyle={{color: theme1.colors.white}}
//               isDisabled={true}
//               title="Save"
//               onPress={() => {}}
//             />
//             <CheckBox
//               title="Services"
//               value=""
//               list={[
//                 {title: 'Web', selected: true},
//                 {title: 'Mobile', selected: false},
//               ]}
//               onChange={item => {
//                 console.log({item});
//               }}
//             />
//             <View style={{marginVertical: 10, zIndex: 5}}>
//               <DropDownList
//                 title="Task *"
//                 data={[
//                   {
//                     title: 'HVAC Repair',
//                   },
//                   {
//                     title: 'AC Repair',
//                   },
//                   {
//                     title: 'Fridge Repair',
//                   },
//                 ]}
//                 displayKey="title"
//                 onChange={(item: any) => {
//                   console.log({item});
//                 }}
//               />
//             </View>
//           </View>
//         </ThemeProvider>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default App;
let AppEntryPoint: any;
// AppEntryPoint = App;
AppEntryPoint = require('./.ondevice').default;
// if (process.env.STORYBOOK_ENABLED === 'true') {
//   AppEntryPoint = require('./.storybook').default;
// }

export default AppEntryPoint;
