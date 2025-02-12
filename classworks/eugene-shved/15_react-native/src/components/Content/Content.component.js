import React from 'react';

import { Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

class Content extends React.Component {
  render() {
    const data = this.props.data;
    const cards = data.map((item, index) =>
      <Card item={item} toFavorites={this.props.toFavoritesFunction} lastCard = { index === data.length - 1 } key={index} />
    );
    return(
      <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
        <ScrollView style={styles.content}>
          {cards}
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default Content;
