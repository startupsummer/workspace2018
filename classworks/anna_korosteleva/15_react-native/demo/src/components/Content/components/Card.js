import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
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
  favorite: {
    width: 48,
    height: 48,
    opacity: 1
  }
});

export default ({ item, addToFav }) => {
return(
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: item.image }} />
    <View style={styles.aside}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
    <TouchableOpacity onPress={addToFav(item)}>
      <Image
        style={styles.favorite}
        source={require('./fav.jpeg')}
      />
    </TouchableOpacity>
  </View>
)
}