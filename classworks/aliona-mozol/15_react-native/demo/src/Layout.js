import React from 'react';
import faker from 'faker';

import { View } from 'react-native';
import styles from './Layout.styles';

import Header from './components/Header';
import Content from './components/Content';

class Layout extends React.Component {
  state = {
    data: [],
    query: '',
  }

  componentDidMount() {
    const newData = Array.from(Array(20)).map(() => ({
      title: faker.name.findName(),
      text: faker.name.jobTitle(),
      image: faker.image.avatar(),
      isFavorite: false,
    }));
    this.setState({ data: newData });
  }

  onChangeText = (text) => {
    this.setState({ query: text });
  };

  onPress = (item) => {
    const data = item.isFavorite
      ? [
          ...this.state.data.filter(element => element !== item),
          { ...item, isFavorite: !item.isFavorite },
        ]
      : [
          { ...item, isFavorite: !item.isFavorite },
          ...this.state.data.filter(element => element !== item),
        ];
    this.setState({ data });
  };

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header onChangeText={this.onChangeText}/>
        <Content data={actualData} onPress={this.onPress} />
      </View>
    );
  }
}

export default Layout;
