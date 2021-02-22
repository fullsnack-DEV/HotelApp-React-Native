import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import PostComponent from '../components/PostComponent';

import feed from '../../assests/data/feed';
const SearchScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => <PostComponent post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
