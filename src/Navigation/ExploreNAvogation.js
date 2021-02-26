import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import Searchresulttabnavigator from './Searchresulttabnavigator';
import Mapscreen from '../Screens/Mapscreen';

const Stack = createStackNavigator();

export default function ExploreNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Search'}
        component={Searchresulttabnavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
