import React, { Component } from 'react';
import RepoHeadContainter from '../RepoHeadContainter/RepoHeadContainter.jsx';
import RepoNavigation from '../RepoNavigation/RepoNavigation.jsx';

class PageHead extends Component {
  render() {
    return (
      <div className="pagehead">
        <RepoHeadContainter />
        <RepoNavigation issuesData={this.props.issuesData} />
      </div>
    );
  }
}

export default PageHead;
