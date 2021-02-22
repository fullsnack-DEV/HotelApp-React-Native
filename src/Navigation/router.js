import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Destinationsearchscreen from '../Screens/Destinationsearchscreen';
import HomeScreen from '../Screens/HomeScreen';
import GuestScreen from '../Screens/GuestScreen';
import SearchScreen from '../Screens/SearchScreen';

import Hometabnavigator from '../Navigation/Hometabnavigator';

const Stack = createStackNavigator();

//creating a Navigator

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeScreen'}
          component={Hometabnavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'GuestScreen'}
          component={GuestScreen}
          options={{
            title: 'How many people?',
          }}
        />
        <Stack.Screen
          name={'SearchScreen'}
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'SearchDestinationScreen'}
          component={Destinationsearchscreen}
          options={{
            title: 'Search your destination',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
