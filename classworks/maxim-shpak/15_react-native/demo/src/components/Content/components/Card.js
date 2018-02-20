import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
  lastChild: {
    marginBottom: 16,
  }
});

export default (props) => {
  const cardClasses = [];
  cardClasses.push(styles.card);
  if (props.isLastChild) {
    cardClasses.push(styles.lastChild);
  }
  const favoritePicture = (props.item.isFavorite ? './broken-heart2.png' : './broken-heart.png');
  return (
    <View style={cardClasses}>
      <Image style={styles.image} source={{ uri: props.item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.text}>{props.item.text}</Text>
      </View>
      <TouchableOpacity onPress={() => props.toggleFavorite(props.item.id)}>
        <Image style={styles.image} source={(props.item.isFavorite ? 
          require('./broken-heart--selected.png') : 
          require('./broken-heart.png'))} />
      </TouchableOpacity>  
    </View>
  );
};
