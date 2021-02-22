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
const Destinationsearchscreen = ({navigation}) => {
  const [textinput, settextinput] = useState();

  return (
    <View style={styles.container}>
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
