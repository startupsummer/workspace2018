import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Svg } from 'expo';

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
    flex: 0,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
//#e64c3c
//#a0a0a0
const favoritesIcon = isFav => (
  <Svg viewBox="0 0 57.947 57.947" width={24} height={24}>
    <Svg.Path fill={isFav ? '#e64c3c' : '#a0a0a0'} d="M28.947,56.486c15.685-11.277,23.532-21.592,27.222-29.46c4.311-9.193,0.561-20.589-8.845-24.413   C36.268-1.88,28.947,8.486,28.947,8.486S21.678-1.907,10.623,2.588C1.217,6.412-2.533,17.808,1.778,27.001   C5.468,34.868,13.262,45.21,28.947,56.486z" />
  </Svg>
);

export default props => (
  <View style={[styles.card, props.lastChild && styles.lastChild]}>
    <Image style={styles.image} source={{ uri: props.item.image }} />
    <View style={styles.aside}>
      <Text style={styles.title}>{props.item.title}</Text>
      <Text style={styles.text}>{props.item.text}</Text>
      <Text style={styles.text}>{props.item.isFav}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={() => props.toFavorites(props.item)}>
      {favoritesIcon(props.item.isFav)}
    </TouchableOpacity>
  </View>
);
