import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Pagehead from './Components/Pagehead/Pagehead.jsx';
import IssuesListing from './Components/IssuesListing/IssuesListing.jsx';

class App extends React.Component {
  state = {
    counter: 2,
  }
  setCounter = (numb) => {
    this.setState({
      counter: numb,
    })
  }
  render() {
    return (
      <body>
        <Header />
        <main class="content">
          <Pagehead counter={this.state.counter}/>
          <div class="container">
            <IssuesListing setCounter={this.setCounter}/>
          </div>
        </main>
      </body>
    );
  }
}

export default App;
