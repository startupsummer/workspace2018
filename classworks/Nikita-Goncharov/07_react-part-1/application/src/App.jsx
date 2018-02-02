import React, {Component} from 'react';
import './App.css';
import data from  './issues-data.js';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Main issuesData={data}/>
      </body>
    );
  }
}

export default App;
