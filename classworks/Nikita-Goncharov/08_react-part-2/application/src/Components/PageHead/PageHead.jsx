import React from 'react';
import RepoHeadContainter from '../RepoHeadContainter/RepoHeadContainter.jsx';
import RepoNavigation from '../RepoNavigation/RepoNavigation.jsx';
import './PageHead.css';

const PageHead = (props) => {
  return (
    <div className="pagehead">
      <RepoHeadContainter />
      <RepoNavigation issuesData={props.issuesData} />
    </div>
  );
};

export default PageHead;
