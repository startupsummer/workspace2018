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

  addToFavorite = item => () => {
    const { data } = this.state;

    const newData = data.map((card) => {
      if (card === item) {
        return {
          ...card,
          isFavorite: !item.isFavorite,
        };
      }
      return card;
    }).sort((up, down) => down.isFavorite - up.isFavorite);

    this.setState({ data: newData });
  }

  changeQuery = (query) => {
    this.setState({ query });
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


  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header changeQuery={this.changeQuery} />
        <Content
          data={actualData}
          addToFavorite={this.addToFavorite}
          favoriteSvg={this.favoriteSvg}
        />
      </View>
    );
  }
}

export default Layout;
