import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Svg } from 'expo';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  aside: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
  likeButton: {
    flex: 0,
    paddingHorizontal: 8,
    justifyContent: 'center',
  }
});

const Card = ({ item, onPress }) => {
  const likeSvg = (
    <Svg viewBox="0 0 510 510" width={24} height={24}>
      <Svg.Path fill={item.isFavorite ? '#d80027' : '#000000'} d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
  			C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
    </Svg>
  );

  const unlikeSvg = (
    <Svg viewBox="0 0 510 510" width={24} height={24}>
      <Svg.Path fill="#d80027" d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
  			C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
    </Svg>
  );

  likeOnPress = () => { onPress(item) };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={likeOnPress}
      >
        {likeSvg}
      </TouchableOpacity>
    </View>
  );
};

export default Card;
