/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/Screens/HomeScreen';
import PostComponent from './src/components/PostComponent';
import feed from './assests/data/feed';
import SearchScreen from './src/Screens/SearchScreen';
import Destinationsearchscreen from './src/Screens/Destinationsearchscreen';
import GuestScreen from './src/Screens/GuestScreen';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <PostComponent post={post1} /> */}
        {/* <SearchScreen /> */}
        {/* <Destinationsearchscreen /> */}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
