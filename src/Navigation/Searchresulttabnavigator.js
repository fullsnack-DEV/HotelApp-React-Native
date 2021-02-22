import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchScreen from '../Screens/SearchScreen';

const Tab = createMaterialTopTabNavigator();

const Searchresulttabnavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'list'} component={SearchScreen} />
      <Tab.Screen name={'Map'} component={SearchScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Searchresulttabnavigator;
