import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
import {Rescue} from '../pages/Rescue';

// import { Container } from './styles';

export const Routes: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Rescue"
        component={Rescue}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
