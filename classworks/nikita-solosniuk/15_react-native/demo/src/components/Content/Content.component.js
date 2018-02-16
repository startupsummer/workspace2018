import React from 'react';

import {  Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

const Content = (props) => {
  const cards = props.data.sort((first) => first.isFavorite ? -1 : 1).map((item, index) =>
    <Card setFavorite={props.setFavorite} item={item} key={index} />
  );

  return (
    <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
      <ScrollView style={styles.content}  contentContainerStyle={styles.contentStyle}>
        {cards}
      </ScrollView>
    </LinearGradient>
  );
};

export default Content;
