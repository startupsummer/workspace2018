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
      isFav: false,
    }));
    this.setState({ data: newData });
  }

  render() {
    const { data, query } = this.state;

    const searchHandler = query => {
      this.setState({ query });
    }

    const onPressMakeFav = index => e => {
      let newData = this.state.data;
      newData[index].isFav = !(newData[index].isFav);
  
      this.setState({
        data: newData
      });
    }

    const searchedData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    const actualData = data.sort((a, b) => b.isFav - a.isFav);

    return (
      <View style={styles.container}>
        <Header query={query} searchHandler={searchHandler}/>
        <Content data={actualData} onPressMakeFav={onPressMakeFav} />
      </View>
    );
  }
}

export default Layout;
