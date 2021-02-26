import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

const Postcarousel = (props) => {
  const post = props.post;

  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width - 80}]}>
      <View style={styles.innercontainer}>
        {/* image */}

        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        <View style={{marginHorizontal: 5, flex: 1}}>
          {/* bed and bedrrom  */}
          <Text style={styles.bedroom}>
            {post.bed} Bed and {post.bedroom} Bedroom
          </Text>
          {/* type and description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}.{post.title}
          </Text>
          {/* old Price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.newprice}>${post.newPrice}</Text>/ Night
          </Text>

          {/* total price */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '25%',
    width: '100%',
    margin: 20,

    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innercontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    height: '350%',
    width: '110%',
    left: -10,
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedroom: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  prices: {fontSize: 15, marginVertical: 10},
  newprice: {
    fontWeight: 'bold',
    color: '#000',
  },
  oldprice: {color: '#5b5b5b', textDecorationLine: 'line-through'},
  totalprice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  description: {
    fontSize: 15,
  },
});

export default Postcarousel;
