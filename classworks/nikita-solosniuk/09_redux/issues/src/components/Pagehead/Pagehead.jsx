import React from 'react';
import './Pagehead.styles.css';
import Repohead from '../Repohead/Repohead';
import Reponav from '../Reponav/Reponav';

const Pagehead = () => (
  <div className="pagehead">
    <Repohead />
    <Reponav />
  </div>
);

export default Pagehead;
