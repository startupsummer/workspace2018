import React from 'react';

import {  Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';


const Content = props => {
  const cards = props.data.map((item, index) =>
    <Card
      lastChild={ props.data.length === index + 1 }
      item={item}
      key={index}
      addToFavorite={props.addToFavorite}/>
  );

  return (
    <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
      <ScrollView style={styles.content}>
        {cards}
      </ScrollView>
    </LinearGradient>
  );
};

export default Content;
