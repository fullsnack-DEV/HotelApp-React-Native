import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Suggestionrow = ({item, navigation}) => {
  return (
    <Pressable
      style={styles.row}
      onPress={() => navigation.navigate('GuestScreen')}>
      <View style={styles.iconcontainer}>
        <Entypo name={'location-pin'} size={29} />
      </View>
      <Text style={styles.locationtxt}>{item.description}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.9,
    borderColor: 'lightgrey',
  },
  iconcontainer: {
    backgroundColor: '#e7e7e7',
    padding: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  locationtxt: {
    fontWeight: 'bold',
  },
});

export default Suggestionrow;
