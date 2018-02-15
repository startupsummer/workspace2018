import React from 'react';
import { connect } from 'react-redux';

const IssuePage = (props) => {
  const elem = props.issuesList.find(item => `${item.id}` === props.itemId);
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
