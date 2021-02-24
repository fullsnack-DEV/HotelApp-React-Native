import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import search from '../../assests/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Suggestionrow from '../components/Suggestionrow';
const Destinationsearchscreen = ({navigation}) => {
  const [textinput, settextinput] = useState();

  return (
    <View style={styles.container}>
      <View style={{height: 600}}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyC2AxWklJPKgHVSF1jQWnv06Cu394AvZ_w',
            language: 'en',
          }}
          renderRow={(item) => (
            <Suggestionrow item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

//

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Destinationsearchscreen;
