import React from 'react';

import { TouchableWithoutFeedback, StyleSheet, Text, View, Image } from 'react-native';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
  },
  favicon: {
    height: 30,
    width: 30,
    padding: 10,
  }
});

const yellowStar = require('./yellowstar.jpg');
const blackStar = require('./blackstar.jpg');


class Card extends React.PureComponent {
  render() {
    return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: this.props.item.image }} />
      <View style={styles.aside}>
        <View>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.text}>{this.props.item.text}</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.props.setFavorite(this.props.item)}>
          {
            this.props.item.isFavorite
            ? <Image  style={styles.favicon} source={yellowStar}/>
            : <Image  style={styles.favicon} source={blackStar}/>
          }
        </TouchableWithoutFeedback>
      </View>
    </View>
    )
  };
}


export default Card;