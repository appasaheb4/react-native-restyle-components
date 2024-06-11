import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const StepperGradient = ({ active = 1, content = [], colors = ['#8330BA', '#C700B1'], height = 60, stepperSize = 10, }) => {
    return (<View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10,
        }}>
      <LinearGradient style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height,
            borderRadius: 5,
            flexDirection: 'row',
            paddingHorizontal: 30,
        }} start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.5, 0.6]} colors={colors}>
        {content.map((item, index) => (<>
            <View key={index}>
              <View style={{
                backgroundColor: index + 1 === active ? 'white' : 'transparent',
                borderColor: 'white',
                borderWidth: 1,
                height: stepperSize,
                width: stepperSize,
                borderRadius: stepperSize / 2,
            }}/>
              <Text style={{
                fontSize: 10,
                position: 'absolute',
                width: 100,
                color: 'white',
                marginLeft: -14,
                marginTop: 18,
            }}>
                {item}
              </Text>
            </View>

            {content.length !== index + 1 && (<View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    height: 1,
                    borderColor: 'white',
                }}/>)}
          </>))}
      </LinearGradient>
    </View>);
};
