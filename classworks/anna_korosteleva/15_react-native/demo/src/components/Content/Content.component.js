import React from 'react';

import {  Text, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

const Content = (props) => {
  const cards = props.data.map((item, index) =>
    <Card item={item} key={index} addToFav={props.addToFav} />
  );

  return (
    <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
      <ScrollView style={styles.content}>
        {cards}
        <View style={styles.margin}></View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Content;
