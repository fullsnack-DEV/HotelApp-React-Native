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
            key: 'AIzaSyB9wvEKxYmERB5FiNl6CCaPvGz4Lm91dik',
            language: 'en',
          }}
        />
      </View>

      <TextInput
        placeholder={'Where are you going?'}
        style={styles.txtinput}
        value={textinput}
        onChangeText={settextinput}
      />
      <FlatList
        data={search}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('GuestScreen')}>
            <View style={styles.iconcontainer}>
              <Entypo name={'location-pin'} size={29} />
            </View>
            <Text style={styles.locationtxt}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  txtinput: {
    fontSize: 20,
    marginBottom: 20,
  },
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

export default Destinationsearchscreen;
