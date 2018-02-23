import React from 'react';
import faker from 'faker';

import { View } from 'react-native';
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
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPressStar = this.onPressStar.bind(this);
  }

  onChangeHandler(text) {
    this.setState({ query: text });
  }
  onPressStar(title) {
    const newList = this.state.data.map((item) => {
      if (item.title !== title) { return item; }
      if (item.isFavorite === false) { item.isFavorite = true; } else { item.isFavorite = false; }
      return item;
    });
    this.setState({
      data: newList,
    });
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
      item.title.toLowerCase().includes(query.toLowerCase())).sort((a,b) => {
      if (a.isFavorite) { return -1; }
      return 0;
    });

    return (
      <View style={styles.container}>
        <Header onChangeHandler={this.onChangeHandler} query={this.state.query} />
        <Content onPressStar={this.onPressStar} data={actualData} />
      </View>
    );
  }
}

export default Layout;
