import React from 'react';
import { connect } from 'react-redux';
import * as issueSelector from '../../Resources/Issue/issueSelector.js';

const IssuePage = (props) => {
  const elem = issueSelector.getIssue(props);
  return (
    <div>
      <p>Title: {elem.title}</p>
      <p>Id:  {elem.id}</p>
      <p>State: {elem.state}</p>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    issuesList: state.data
  };
}

export default connect(mapStateToProps)(IssuePage);
