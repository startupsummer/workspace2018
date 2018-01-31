import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Pagehead from './Components/Pagehead/Pagehead.jsx';
import IssuesListing from './Components/IssuesListing/IssuesListing.jsx';

function App() {
  return (
    <body>
      <Header />
      <main class="content">
        <Pagehead />
        <div class="container">
          <IssuesListing />
        </div>
      </main>
    </body>
  );
}

export default App;
