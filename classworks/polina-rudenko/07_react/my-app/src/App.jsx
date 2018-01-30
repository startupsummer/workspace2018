import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';

function App() {
  return (
    <div>
      <Header/>
      <main className="content">
      <Pagehead/>
        <div className="container">
        <IssuesListing/>
        </div>
      </main>
    </div>
  );
}

export default App;
