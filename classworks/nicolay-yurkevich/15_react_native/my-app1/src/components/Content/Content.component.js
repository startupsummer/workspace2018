import React from 'react';

import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';


const Content = ({ onPressStar, data }) => (
  <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
    <ScrollView style={styles.content}>
      {
        data.map(item => (
          <Card
            item={item}
            key={item.title}
            isFavorite={item.isFavorite}
            title={item.title}
            onPressStar={onPressStar}
          />
        ))
      }
    </ScrollView>
  </LinearGradient>
);

export default Content;
