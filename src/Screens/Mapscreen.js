import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Places from '../../assests/data/feed';
import CustomMarker from '../components/CustomMarker';
import Postcarousel from '../components/postcarousel';

export default function Mapscreen() {
  const [selctedid, Setselectedid] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {Places.map((place, index) => (
          <CustomMarker
            key={String(index)}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => Setselectedid(place.id)}
            isSelected={place.id === selctedid}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 25}}>
        <Postcarousel post={Places[0]} key={String(Places.index)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
