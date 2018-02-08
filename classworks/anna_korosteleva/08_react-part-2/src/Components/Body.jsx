import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Search from './Search';
import Issue from './Issue';
import PageHead from './PageHead';
import NewIssue from './NewIssue'

const Body = ({
  openCount, newIssue, closedCount, onCloseClick, onOpenClick,
  issuePage, closeIssue, condition, items,
}) => (
  <React.Fragment>
    <PageHead openCount={openCount} />
    <div className="container">
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <div className="subnav">
            <Search />
            <NewIssue newIssue={newIssue}/>
          </div>
        </div>
        <Tabs
          openCount={openCount}
          closedCount={closedCount}
          onCloseClick={onCloseClick}
          onOpenClick={onOpenClick}
        />
        <Issue
          issuePage={issuePage}
          closeIssue={closeIssue}
          condition={condition}
          items={items}
        />
      </div>
    </div>
  </React.Fragment>
);

Body.propTypes = {
  closedCount: PropTypes.number,
  openCount: PropTypes.number,
  onOpenClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  issuePage: PropTypes.func,
  closeIssue: PropTypes.func,
  condition: PropTypes.string,
  items: PropTypes.array,
  newIssue: PropTypes.func,
};

Body.defaultProps = {
  closedCount: 0,
  openCount: 0,
  condition: 'open',
};
export default Body;
