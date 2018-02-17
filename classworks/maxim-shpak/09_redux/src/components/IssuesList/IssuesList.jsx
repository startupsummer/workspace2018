import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import IssuesListItem from './IssuesListItem/IssuesListItem';
import IssuesSelectors from '../../resources/issues/issues.selectors';
import SubNavbar from '../SubNavbar/SubNavbar';
import './IssuesList.css';

function IssuesList(props) {
  const renderListItem = item => (
    <IssuesListItem
      key={item.id}
      id={item.id}
      number={item.number}
      title={item.title}
      state={item.state}
    />
  );
  return (
    <div className="issues-listing">
      <div className="issues-listing__subnav">
        <SubNavbar />
      </div>
      <div className="issues-listing__header">
        <ButtonsPanel />
      </div>
      <div className="issues-listing__body">
        <ul className="issues">
          {props.searchResult.map(renderListItem)}
        </ul>
      </div>
    </div>
  );
}

IssuesList.defaultProps = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    number: -1,
  })),
};

IssuesList.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.number,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = state => ({
  searchResult: IssuesSelectors.getSearchResultByState(state),
});

export default connect(mapStateToProps)(IssuesList);
