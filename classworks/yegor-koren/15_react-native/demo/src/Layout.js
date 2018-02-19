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

    let position;
    const newData = data.map((item, index) => {
      if (id === item.id) {
        position = index;
        const newItem = { ...item };
        newItem.favorite = item.favorite ? false : true;
        return newItem;
      }
      return item;
    });

    let flag = true;
    const item = newData.splice(position, 1);
    for (let i = 0; i < newData.length; i += 1) {
      if (newData[i].favorite === false) {
        newData.splice(i, 0, item[0]);
        flag = false;
        break;
      }
    }
    if (flag) newData.splice(newData.length, 0, item[0]);

    this.setState({ data: newData });
  }

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

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
