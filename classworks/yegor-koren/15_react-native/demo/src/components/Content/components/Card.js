import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'row',
  },
  firstCard: {
    marginTop: 16,
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

export default ({ item, firstCard }) => {
  const st = firstCard ? [styles.card, styles.firstCard] : styles.card;
  return(
    <View style={st}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
}
