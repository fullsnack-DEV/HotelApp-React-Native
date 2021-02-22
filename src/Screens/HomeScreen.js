import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assests/Images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.Searchbutton}
          onPress={() => navigation.navigate('SearchDestinationScreen')}>
          <Fontisto
            name="search"
            size={20}
            color={'#f15454'}
            style={{margin: 10}}
          />
          <Text style={styles.searchbuttontext}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button')}>
          <Text style={styles.buttontext}>Explore Nearby Stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#ffff',
    width: 200,
    marginLeft: 25,
    borderRadius: 10,
    marginTop: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Searchbutton: {
    backgroundColor: '#ffff',

    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',

    top: 20,
  },
  searchbuttontext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
