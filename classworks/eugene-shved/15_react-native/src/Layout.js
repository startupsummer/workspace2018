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
    const newData = Array.from(Array(20)).map((item, index) => ({
      id: index + 1,
      title: faker.name.findName(),
      text: faker.name.jobTitle(),
      image: faker.image.avatar(),
      star: false,
    }));
    this.setState({ data: newData });
  }

  setActualData = (query) => {
    this.setState({ query });
  }

  setToFavorites = (user) => {
    user.star = !user.star;
    this.setState({ data: [...this.state.data] });
  }

  render() {
    const { data, query } = this.state;

    const actualData = data.sort((a, b) => {
      return (a.id - b.id);
    })
    .sort((a) => {
      return (a.star === true) ? -1 : 1;
    })
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header filtering={this.setActualData}/>
        <Content data={actualData} toFavoritesFunction={this.setToFavorites}/>
      </View>
    );
  }
}

export default Layout;
