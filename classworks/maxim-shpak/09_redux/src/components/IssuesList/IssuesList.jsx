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

IssuesList.propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  searchResult: IssuesSelectors.getSearchResultByState(state),
});

export default connect(mapStateToProps)(IssuesList);
