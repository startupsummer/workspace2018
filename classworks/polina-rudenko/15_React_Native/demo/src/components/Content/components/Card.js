import React from 'react';
import PropTypes from 'prop-types';

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
  },
  favorite: {
    flex: 0,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
const Card = (props) => {
  const favoriteSvg = (
    <Svg viewBox="0 0 512 512" width={24} height={24}>
      <Svg.Path fill={props.item.isFavorite ? 'red' : 'gray'} d="M364,48c-39.648,0-78.912,14.912-108,40.512C226.912,62.912,187.648,48,148,48
        C65.024,48,0,109.248,0,187.424C0,302.336,222.144,445.6,247.456,461.536C250.08,463.2,253.024,464,256,464
        c2.912,0,5.824-0.768,8.416-2.368C356.384,404.864,512,283.296,512,187.424C512,109.248,447.008,48,364,48z"/>
    </Svg>
  );
  return (
    <View style={[styles.card, props.lastChild && styles.lastChild]}>
      <Image style={styles.image} source={{ uri: props.item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.text}>{props.item.text}</Text>
      </View>
      <TouchableOpacity onPress={props.addToFavorite(props.item)} style={styles.favorite}>
        {favoriteSvg}
      </TouchableOpacity>
    </View>
  );
};

Card.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  lastChild: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired,
  }),
};

export default Card;
