/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import data from '../../issues-data';
import IssuePage from '../IssuePage/IssuePage';

class App extends Component {
  render() {
    return (
    		<Router>
      		<div>
        		<Header />
        		<Main issues={data} />
        	</div>
        </Router>
    );
  }
}

export default App;
