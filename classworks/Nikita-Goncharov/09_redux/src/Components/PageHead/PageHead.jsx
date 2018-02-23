import React from 'react';
import RepoHeadContainter from '../RepoHeadContainter/RepoHeadContainter.jsx';
import RepoNavigation from '../RepoNavigation/RepoNavigation.jsx';
import './PageHead.css';

const PageHead = (props) => {
  return (
    <div className="pagehead">
      <RepoHeadContainter />
      <RepoNavigation />
    </div>
  );
};

export default PageHead;
