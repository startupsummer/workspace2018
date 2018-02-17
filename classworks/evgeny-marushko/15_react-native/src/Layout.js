import React from 'react';
import faker from 'faker';

import { View, Alert } from 'react-native';
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
      isFav: false,
    }));
    this.setState({ data: newData });
  }

  filterUsers = (query) => {
    this.setState({ query });
  }

  toFavorites = (user) => {
    user.isFav = !user.isFav;
    this.setState({ data: [...this.state.data] });
  }
  render() {
    const { data, query } = this.state;

    const actualData = data.sort((a, b) => {
      return (a.id - b.id);
    })
    .sort((a) => {
      return (a.isFav === true) ? -1 : 1;
    })
    .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));
    return (
      <View style={styles.container}>
        <Header filterFunction={this.filterUsers} />
        <Content toFavoritesFunction={this.toFavorites} data={actualData} />
      </View>
    );
  }
}

export default Layout;
