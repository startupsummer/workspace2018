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
    }));
    this.setState({ data: newData });
  }

  updateQuery = (text) => {
    this.setState({ data: this.state.data, query: text});
  }

  render() {
    const { data, query } = this.state;

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header updateQuery={this.updateQuery} />
        <Content data={actualData}/>
      </View>
    );
  }
}

export default Layout;
