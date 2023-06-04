import { useEffect } from 'react';
import Splash from './componets/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingGeneral from './componets/LandingGeneral';
import ActivityRepeat from './componets/ActivityRepeat';
import ThemeDemo from './componets/ThemeDemo';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="LandingGeneral" component={LandingGeneral} options={{ headerShown: false }} />
        <Stack.Screen name="ActivityRepeat" component={ActivityRepeat} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}