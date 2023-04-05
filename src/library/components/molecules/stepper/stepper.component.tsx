/* eslint-disable import/prefer-default-export */
import React from 'react';
import {View, Text} from 'react-native';

interface StepperGradientProps {
  active: number;
  content: Array<string>;
  colors?: Array<string>;
  height?: number;
  stepperSize: number;
}

export const StepperGradient = ({
  active = 1,
  content = [],
  colors = ['#8330BA', '#C700B1'],
  height = 60,
  stepperSize = 10,
}: StepperGradientProps) => {
  return (
    <View>
      <Text>HI hello</Text>
    </View>
  );
};
