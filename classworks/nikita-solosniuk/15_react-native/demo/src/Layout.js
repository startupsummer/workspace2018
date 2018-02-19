import React from 'react';
import faker from 'faker';

import { View, StatusBar } from 'react-native';
import styles from './Layout.styles';

import Header from './components/Header';
import Content from './components/Content';

class Layout extends React.PureComponent {
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
  changeQuery = (text) => {
    this.setState({query: text})
  };

  setFavorite = (item) => () => {
    const newData = this.state.data.map((human) =>
      item.title === human.title
        ? { ...human, isFavorite: !item.isFavorite }
        : human
      );
    this.setState({data: newData})
  };

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="red"/>
        <Header changeQuery={this.changeQuery}/>
        <Content setFavorite={this.setFavorite} data={actualData}/>
      </View>
    );
  }
}

export default Layout;
