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
      isFavorite: false
    }));
    this.setState({ data: newData });
  }

  search = data => {
    this.setState({
      query: data
    })
  }

  addToFav = item => () => {
    this.setState({
      data: this.state.data.map(el => {
        if(el == item) item.isFavorite = item.isFavorite ? false : true
       }),
       data: this.state.data.sort((a, b) =>  b.isFavorite - a.isFavorite)
    })
  }

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header search={this.search}/>
        <Content data={actualData} addToFav={this.addToFav}/>
      </View>
    );
  }
}

export default Layout;
