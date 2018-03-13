import React from 'react';

import { Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

const Content = ({ data, onPress }) => {
  const cards = data.map((item, index) =>
    <Card item={item} key={index} onPress={onPress} />
  );

  return (
    <LinearGradient style={styles.background} colors={['#03b79f', '#780096']}>
      <ScrollView contentContainerStyle={styles.content}>
        {cards}
      </ScrollView>
    </LinearGradient>
  );
};

export default Content;
