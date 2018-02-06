import React from 'react';
import './pagehead.styles.css';
import PageheadTitle from '../pagehead-title/PageheadTitle';
import Reponav from '../reponav/Reponav';

const Pagehead = () => (
  <div className="pagehead">
    <div className="container repohead-container">
      <PageheadTitle />
    </div>
    <div className="container">
      <Reponav />
    </div>
  </div>
);

export default Pagehead;
