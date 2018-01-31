import React from 'react';
import './Pagehead.styles.css';
import Repohead from '../Repohead/Repohead';
import Reponav from '../Reponav/Reponav';

const Pagehead = props => (
  <div className="pagehead">
    <Repohead />
    <Reponav issuesCount={props.issuesCount} />
  </div>);

export default Pagehead;
