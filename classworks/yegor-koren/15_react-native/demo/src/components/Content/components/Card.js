import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Svg } from 'expo';

import styl from '../../Header/Header.styles';

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

export default ({
  item,
  firstCard,
  updateFavorite,
}) => {
  const st = firstCard ? [styles.card, styles.firstCard] : styles.card;
  const favSvg = item.favorite ?
  (
    <Svg style={styl.header_button} viewBox="0 0 24 24" width={24} height={24}>
      <Svg.Path fill="#a0a0a0" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </Svg>
  ) :
  (
    <Svg style={styl.header_button} viewBox="0 0 24 24" width={24} height={24}>
      <Svg.Path fill="#fff" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </Svg>
  );
  const action = () => {
    updateFavorite(item.id);
  }

  return(
    <View style={st}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity style={styl.button} onPress={action}>
          {favSvg}
        </TouchableOpacity>
      </View>
    </View>
  );
}
