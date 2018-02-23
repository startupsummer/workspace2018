import React from 'react';
import { Svg } from 'expo';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between' 
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
  wrapper: {
    paddingTop: 8,
    paddingBottom: 8
  },
  itemBlock: {
    flex: 1
  },
  itemBlockRight: {
  flex: 0.5,
  width: 0.5,
  flexDirection: 'row',
  justifyContent: 'flex-end'
}
});
let red = require ('./images/red.png');
export default class Card extends React.Component {

toggleUserState = () => this.props.onPressStar(this.props.item.title);

render(){
const {item, onPressStar, title, isFavorite} = this.props;

return (
<View style={styles.wrapper}>
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.aside}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    <TouchableHighlight onPress={this.toggleUserState} style={styles.itemBlockRight}>
      <Image
        style={{width: 40, height: 40}}
        source={isFavorite?require ('./images/red.png'):require ('./images/black.jpg')}
      />
     </TouchableHighlight> 
    </View>
  </View>
  )
 }
}
