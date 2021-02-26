import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Places from '../../assests/data/feed';
import CustomMarker from '../components/CustomMarker';
import Postcarousel from '../components/postcarousel';

export default function Mapscreen() {
  const [selctedid, Setselectedid] = useState(null);
  const width = useWindowDimensions().width;

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 80});
  const onViewchange = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedplaces = viewableItems[0].item;
      Setselectedid(selectedplaces.id);
    }
  });
  //creating a effect which will run only when the selectedis change

  useEffect(() => {
    if (!selctedid || !flatlist) {
      return;
    }

    const index = Places.findIndex((place) => place.id === selctedid);

    flatlist.current.scrollToIndex({index});

    const selectedplace = Places[index];
    const region = {
      latitude: selectedplace.coordinate.latitude,
      longitude: selectedplace.coordinate.longitude,
      latitudeDelta: 0.9,
      longitudeDelta: 0.9,
    };
    map.current.animateToRegion(region);
  }, [selctedid]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
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
      <View style={{position: 'absolute', bottom: 5}}>
        <FlatList
          data={Places}
          ref={flatlist}
          renderItem={({item}) => <Postcarousel post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 40}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewchange.current}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
