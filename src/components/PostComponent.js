import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PostComponent = () => {
  return (
    <View style={styles.container}>
      {/* image */}

      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      {/* bed and bedrrom  */}
      <Text style={styles.bedroom}>1 Bed and 1 Bedroom</Text>
      {/* type and description */}
      <Text style={styles.description} numberOfLines={3}>
        This elegant and modish house is a comfortable and snug dwelling which
        will cater to all the needs of you and your family. The homely
        environment of this house would make you want to stay a little longer.{' '}
      </Text>
      {/* old Price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldprice}> $26 </Text>
        <Text style={styles.newprice}> $23 </Text>/ Night
      </Text>

      {/* total price */}
      <Text style={styles.totalprice}>$220 total</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  prices: {fontSize: 18, marginVertical: 10},
  newprice: {
    fontWeight: 'bold',
  },
  oldprice: {color: '#5b5b5b', textDecorationLine: 'line-through'},
  totalprice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
  },
});

export default PostComponent;
