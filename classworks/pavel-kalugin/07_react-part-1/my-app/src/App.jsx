import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Pagehead from './Components/Pagehead/Pagehead';
import IssuesListing from './Components/IssuesListing/IssuesListing';

class App extends React.Component {
  state = {
    counter: 2,
  }
  setCounter = (numb) => {
    this.setState({
      counter: numb,
    });
  }
  render() {
    return (
      <body id="home">
        <Header />
        <main className="content">
          <Pagehead counter={this.state.counter} />
          <div className="container">
            <IssuesListing setCounter={this.setCounter} />
          </div>
        </main>
      </body>
    );
  }
}

export default App;
