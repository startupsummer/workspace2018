import React from 'react';
import faker from 'faker';

import { View } from 'react-native';
import styles from './Layout.styles';
import SearchInput, { createFilter } from 'react-native-search-filter';

import Header from './components/Header';
import Content from './components/Content';

const KEYS_TO_FILTERS = [];

class Layout extends React.Component {

  state = {
    data: [],
    query: '',
    searchText: '',
  }

  componentDidMount() {
    const newData = Array.from(Array(20)).map(() => ({
      title: faker.name.findName(),
      text: faker.name.jobTitle(),
      image: faker.image.avatar(),
    }));
    this.setState({ data: newData });
  }

  setSearchText = (text) => {
    this.setState({ query: text });
  }

  render() {
    const { data, query } = this.state;

    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header
          setSearchText={this.setSearchText}
        />
        <Content data={filteredData}/>
      </View>
    );
  }
}

export default Layout;
