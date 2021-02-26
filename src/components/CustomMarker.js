import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function CustomMarker(props) {
  const {coordinate, price, onPress, isSelected} = props;

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? '#fff' : '#000',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'grey',
          padding: 1.5,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: isSelected ? '#000' : '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 5,
          }}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
}
const styles = StyleSheet.create({});
