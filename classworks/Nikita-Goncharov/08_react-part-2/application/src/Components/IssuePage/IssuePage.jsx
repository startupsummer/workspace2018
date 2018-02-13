import React from 'react';

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

export default IssuePage;
