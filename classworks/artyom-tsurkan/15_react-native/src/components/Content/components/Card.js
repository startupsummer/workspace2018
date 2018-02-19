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
  },
  lastChild: {
    marginBottom: 16,
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
  button: {
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});

const favouriteSvg = (isFavourite) => (
    <Svg style={styles.button} width={24} height={24}>
        <Svg.Path fill={isFavourite ? 'red' : 'gray'} d="M11.928 4.86c.969-2.296 3.181-3.9 5.755-3.9 3.467 0 5.964 2.966 6.278 6.501 0 0 .169.877-.204 2.457-.508 2.151-1.702 4.063-3.311 5.521L11.928 23.04 3.553 15.439c-1.609-1.458-2.803-3.37-3.311-5.521-.373-1.58-.204-2.457-.204-2.457C.352 3.926 2.849.96 6.316.96 8.891.96 10.959 2.565 11.928 4.86z"/>
    </Svg>
);

export default (props) => (
  <View style={[styles.card, props.lastChild && styles.lastChild]}>
    <Image style={styles.image} source={{ uri: props.item.image }} />
    <View style={styles.aside}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.text}>{props.item.text}</Text>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => props.toggleFavourite(props.item)}>
          {favouriteSvg (props.item.isFavourite)}
      </TouchableOpacity>
  </View>
)
