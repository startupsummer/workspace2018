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
  },
  btn: {
    borderRadius: 8,
    backgroundColor: '#00BFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  }
});

export default (props) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: props.item.image }} />
    <View style={styles.aside}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.text}>{props.item.text}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => props.setFavourite(props.item)}>
        <Text>Favourite</Text>
      </TouchableOpacity>
    </View>
  </View>
)
