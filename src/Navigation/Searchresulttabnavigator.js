import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchScreen from '../Screens/SearchScreen';
import Mapscreen from '../Screens/Mapscreen';
const Tab = createMaterialTopTabNavigator();

const Searchresulttabnavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchScreen} />
      <Tab.Screen name={'Map'} component={SearchScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Searchresulttabnavigator;
