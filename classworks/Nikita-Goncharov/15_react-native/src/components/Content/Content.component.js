import React from 'react';

import {  Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

const Content = ({ data }) => {
  const cards = data.map((item, index) =>
    <Card item={item} key={index} />
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
