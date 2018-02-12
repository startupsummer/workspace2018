import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import Issue from '../Issue/Issue';
import PageHead from '../PageHead/PageHead';
import Button from '../Button/Button';
import './Body.css';

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
            <Button onClick={newIssue} />
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
  onOpenClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  issuePage: PropTypes.func.isRequired,
  closeIssue: PropTypes.func.isRequired,
  condition: PropTypes.string,
  items: PropTypes.array.isRequired,
  newIssue: PropTypes.func.isRequired,
};

Body.defaultProps = {
  closedCount: 0,
  openCount: 0,
  condition: 'open',
};
export default Body;
