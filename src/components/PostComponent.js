import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PostComponent = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* image */}

      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/* bed and bedrrom  */}
      <Text style={styles.bedroom}>
        {post.bed} Bed and {post.bedroom} Bedroom
      </Text>
      {/* type and description */}
      <Text style={styles.description} numberOfLines={3}>
        {post.type}.{post.title}
      </Text>
      {/* old Price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldprice}> $ {post.oldPrice} </Text>
        <Text style={styles.newprice}> ${post.newPrice} </Text>/ Night
      </Text>

      {/* total price */}
      <Text style={styles.totalprice}> ${post.totalPrice}</Text>
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
