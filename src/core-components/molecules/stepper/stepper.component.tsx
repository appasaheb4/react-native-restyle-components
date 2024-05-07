import React from 'react';
import {TextInput} from 'react-native'
import {Box} from '../..';
import LinearGradient from 'react-native-linear-gradient';

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
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginVertical="md">
      <LinearGradient
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          height: height,
          borderRadius: 5,
          flexDirection: 'row',
          paddingHorizontal: 30,
        }}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={colors}>
        {content.map((item, index) => (
          <>
            <Box key={index}>
              <Box
                backgroundColor={index + 1 === active ? 'white' : 'transparent'}
                borderColor="white"
                borderWidth={1}
                height={stepperSize}
                width={stepperSize}
                borderRadius={stepperSize / 2}
              />
              {/* <TextInput
                style={{
                  fontSize:10,
                  position: 'absolute',
                  width: 100,
                  color: 'white',
                  marginLeft: -20,
                  marginTop: 12,
                }}>
                {item}
              </TextInput> */}
            </Box>

            {content.length !== index + 1 && (
              <Box
                flex={1}
                backgroundColor="white"
                height={1}
                borderColor="white"
              />
            )}
          </>
        ))}
      </LinearGradient>
    </Box>
  );
};
