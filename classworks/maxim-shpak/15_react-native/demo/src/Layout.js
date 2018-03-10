import React from 'react';
import faker from 'faker';

import { View, StatusBar } from 'react-native';
import styles from './Layout.styles';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class Layout extends React.Component {
  state = {
    activeTab: 'all',
    data: [],
    query: '',
    searchValue: '',
  }

  onSearchInput = (value) => {
    this.setState({ searchValue: value })
  }

  toggleFavorite = (id) => {
    const item = this.state.data.find(item => item.id === id);
    const newItem = {...item, isFavorite: !item.isFavorite};
    const newData = [newItem, ...this.state.data.filter(item => item.id !== id)];
    this.setState({ data: newData });
  }

  toggleActiveTab = () => {
    this.setState({
      activeTab : this.getNextTab(this.state.activeTab),
    });
  }

  getNextTab = (currentTab) => (currentTab === 'all') ? 'favorites' : 'all';

  componentDidMount() {
    const newData = Array.from(Array(20)).map((item, index) => ({
      id: index,
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
      item.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header onSearchInput={this.onSearchInput} />
        <Content activeTab={this.state.activeTab} searchValue={this.state.searchValue} data={actualData} toggleFavorite={this.toggleFavorite}/>
        <Footer nextTab={this.getNextTab(this.state.activeTab)} toggleActiveTab={this.toggleActiveTab}/>
      </View>
    );
  }
}

export default Layout;
