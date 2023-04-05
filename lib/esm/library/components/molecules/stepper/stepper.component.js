/* eslint-disable react-native/no-inline-styles */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Text } from 'react-native';
import { Box } from '../..';
import LinearGradient from 'react-native-linear-gradient';
export const StepperGradient = ({ active = 1, content = [], colors = ['#8330BA', '#C700B1'], height = 60, stepperSize = 10, }) => {
    return (<Box flexDirection="row" alignItems="center" justifyContent="space-between" marginVertical="md">
      <LinearGradient style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height,
            borderRadius: 5,
            flexDirection: 'row',
            paddingHorizontal: 30,
        }} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.5, 0.6]} colors={colors}>
        <Text>HI hello</Text>
      </LinearGradient>
    </Box>);
};
//# sourceMappingURL=stepper.component.js.map