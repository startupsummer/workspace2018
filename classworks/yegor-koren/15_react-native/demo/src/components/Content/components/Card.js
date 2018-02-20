import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Svg } from 'expo';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'row',
  },
  firstCard: {
    marginTop: 16,
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
  button: {
    backgroundColor: '#f0f0f0',
    flex: 0,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});

export default ({
  item,
  firstCard,
  updateFavorite,
}) => {
  const st = firstCard ? [styles.card, styles.firstCard] : styles.card;
  const favSvg = item.favorite ?
  (
    <Svg version="1.1" viewBox="0 0 268.477 268.477" width={24} height={24} >
	     <Svg.Path style="fill-rule:evenodd;clip-rule:evenodd;" d="M267.522,99.163c-2.017-5.389-6.963-9.132-12.693-9.621l-75.845-8.999   l-31.046-71.52c-2.355-5.469-7.728-9.016-13.678-9.024h-0.022c-5.942,0-11.318,3.525-13.685,8.981l-31.06,71.563l-75.845,8.999   c-5.745,0.495-10.692,4.247-12.701,9.643c-2.017,5.397-0.75,11.47,3.262,15.608l58.437,55.242l-17.659,80.845   c-1.041,5.709,1.327,11.514,6.074,14.865c2.564,1.813,5.58,2.731,8.602,2.731c2.564,0,5.128-0.655,7.435-1.988l67.142-42.758   l67.141,42.758c2.309,1.333,4.871,1.988,7.435,1.988c3.015,0,6.015-0.91,8.579-2.717c4.749-3.336,7.122-9.119,6.103-14.828   l-17.665-80.896l58.463-55.272C268.287,110.628,269.547,104.554,267.522,99.163z" fill="#D80027"/>
     </Svg>
  ) :
  (
    <Svg version="1.1" viewBox="0 0 259.531 259.531" width={24} height={24}>
        <Svg.Path d="m251.205,124.544c6.96-6.96 10.441-17.401 6.96-26.102-3.48-8.701-10.441-15.661-20.882-17.401l-53.944-8.701c-3.48-1.74-5.22-3.48-6.96-5.22l-24.362-48.723c-3.48-8.701-13.921-13.921-22.621-13.921-8.701,0-17.401,5.22-22.621,13.921l-24.361,48.724c-1.74,3.48-3.48,5.22-6.96,5.22l-53.944,8.701c-10.441,1.74-17.401,8.701-20.882,17.401-1.74,8.701 0,19.141 6.96,26.102l38.283,38.283c1.74,1.74 1.74,3.48 1.74,6.96l-6.96,53.944c-1.74,6.96 0,15.661 5.22,20.882 6.96,8.701 20.882,12.181 31.322,6.96l48.723-24.362c1.74-1.74 5.22-1.74 6.96,0l48.723,24.362c3.48,1.74 8.701,3.48 12.181,3.48 6.96,0 13.921-3.48 20.882-10.441 3.48-5.22 6.96-13.921 5.22-20.882l-8.701-53.944c-1.74-1.74 0-5.22 1.74-6.96l38.284-38.283zm-57.424,50.464l8.701,53.944c0,3.48 0,5.22-1.74,6.96-1.74,1.74-6.96,3.48-10.441,1.74l-48.723-24.362c-3.48-1.74-8.701-3.48-12.181-3.48s-8.701,0-12.181,3.48l-48.723,24.362c-3.48,1.74-8.701,1.74-10.441-1.74-1.74-1.74-1.74-3.48-1.74-6.96l6.96-53.944c1.74-8.701-1.74-17.401-6.96-22.621l-38.283-38.283c-1.74-1.74-3.48-5.22-1.74-8.701 0,0 1.74-5.22 6.96-5.22l53.944-8.701c8.701-1.74 15.661-6.96 19.141-13.921l24.362-48.723c3.48-5.22 12.181-5.22 15.661,0l24.362,48.723c3.48,6.96 10.441,12.181 19.141,13.921l53.944,8.701c5.22,0 6.96,3.48 6.96,5.22 1.74,3.48 0,6.96-1.74,8.701l-38.283,38.283c-5.22,6.96-8.7,13.92-6.96,22.621z" fill="#D80027"/>
    </Svg>
  );
  const action = () => {
    updateFavorite(item.id);
  }

  return(
    <View style={st}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={action}>
        {favSvg}
      </TouchableOpacity>
    </View>
  );
}
