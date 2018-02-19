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
      console.log(this.state.data[index].isFav);
      let newData = this.state.data;
      newData[index].isFav = !(newData[index].isFav);
      newData = newData.sort((a, b) => {
        if (!a.isFav && !b.isFav)
          return 0;
        if (!a.isFav && b.isFav)
          return 1;
        if (a.isFav && !b.isFav)
          return -1;
        if (a.isFav && b.isFav)
          return 0;
      });   
  
      this.setState({
        data: newData
      });
    }

    const actualData = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <Header query={query} searchHandler={searchHandler}/>
        <Content data={actualData} onPressMakeFav={onPressMakeFav} />
      </View>
    );
  }
}

export default Layout;
