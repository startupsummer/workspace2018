import React from 'react';

import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

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
  }
});

export default (props) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: props.item.image }} />
    <View style={styles.aside}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.text}>{props.item.text}</Text>
      <TouchableOpacity onPress={() => props.setFavourite(props.item)}>
        <Text>favourite</Text>
      </TouchableOpacity>
    </View>
  </View>
)
