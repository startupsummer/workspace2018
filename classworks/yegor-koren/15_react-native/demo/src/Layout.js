import React from 'react';
import faker from 'faker';

import { View, Text } from 'react-native';
import styles from './Layout.styles';

import Header from './components/Header';
import Content from './components/Content';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: '',
    };
  }

  componentDidMount() {
    const newData = Array.from(Array(20)).map(() => ({
      title: faker.name.findName(),
      text: faker.name.jobTitle(),
      image: faker.image.avatar(),
      id: Math.floor(Math.random() * 1000000000),
      favorite: false,
    }));
    this.setState({ data: newData });
  }

  updateQuery = (text) => {
    this.setState({ query: text });
  }

  updateFavorite = (id) => {
    const { data } = this.state;

    const newData = data.map((item, index) => {
      if (id === item.id) {
        const newItem = { ...item };
        newItem.favorite = item.favorite ? false : true;
        return newItem;
      }
      return item;
    });

    this.setState({ data: newData });
  }

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => (!a.favorite) ? 1 : -1);


    return (
      <View style={styles.container}>
        <Header updateQuery={this.updateQuery} />
        <Content
          data={actualData}
          updateFavorite={this.updateFavorite}
        />
      </View>
    );
  }
}

export default Layout;
