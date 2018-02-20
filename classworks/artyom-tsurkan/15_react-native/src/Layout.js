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
    const newData = Array.from(Array(20)).map((item, index) => ({
      id: index,
      title: faker.name.findName(),
      text: faker.name.jobTitle(),
      image: faker.image.avatar(),
      isFavourite: false
    }));
    this.setState({ data: newData });
  }

  filterUsers = (query) => {
    this.setState({ query });
  }

  toggleFavourite = (item) => {
    const newData = this.state.data.map( (card) => {
      return (card.id === item.id) ? {...card, isFavourite: !item.isFavourite} : card;
    }
    );

    this.setState({data: newData});
  };

  render() {
    const { data, query } = this.state;

    const actualData = data.sort((a, b) => {
        return (a.id - b.id);
      })
        .sort((a) => {
            return (a.isFavourite === true) ? -1 : 1;
        })
        .filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <Header filterUsers={this.filterUsers} />
        <Content toggleFavourite={this.toggleFavourite} data={actualData}/>
      </View>
    );
  }
}

export default Layout;
