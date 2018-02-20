import React from 'react';

import {  Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';

import styles from './Content.styles';

import Card from './components/Card';

const Content = (props) => {
  const cards = props.data
    .filter(item => props.activeTab === 'favorites'? item.isFavorite : true)
    .filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
    .sort((x,y) => x.id - y.id)
    .sort(item => item.isFavorite ? -1 : 1)
    .map((item, index) => {
      return <Card item={item} isLastChild={(index === props.data.length - 1)} key={index} 
        toggleFavorite={(id) => props.toggleFavorite(id)}/>;
    });
  return (
    <LinearGradient style={styles.background} colors={['#e96443', '#904e95']}>
      <ScrollView style={styles.content}>
        {cards}
      </ScrollView>
    </LinearGradient>
  );
};

export default Content;
