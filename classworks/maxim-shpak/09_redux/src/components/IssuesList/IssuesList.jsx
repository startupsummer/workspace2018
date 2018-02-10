import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IssuesListItem from './IssuesListItem/IssuesListItem';
import SubNavbar from '../SubNavbar/SubNavbar';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';

import IssuesSelectors from '../../resources/issues/issues.selectors';
import './IssuesList.css';

function IssuesList(props) {
  const renderListItem = item => (
    <IssuesListItem
      key={item.id}
      id={item.id}
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
          {props.searchResult
              .filter(item => item.state === props.activeTab)
              .map(renderListItem)}
        </ul>
      </div>
    </div>
  );
}

IssuesList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  activeTab: IssuesSelectors.getActiveTab(state),
  searchResult: IssuesSelectors.getSearchResult(state),
});

export default connect(mapStateToProps)(IssuesList);
