import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issues/issues.actions';
import * as issueSelectors from '../../resources/issues/issues.selectors';


const Tabs = (props) => 
{
  return(
    <div className="issues-listing__header">
      <div className="issues-listing__states">
        <button onClick={props.onOpenClick} className="btn-link btn-link--selected" type="button">
          <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
          </svg>
          {props.openCount} Open
        </button>
        <button
          onClick={props.onCloseClick}
          className="btn-link"
          type="button"
        >
          <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
          {props.closedCount} Closed
        </button>
      </div>
    </div>
  );
}; 

Tabs.propTypes = {
  closedCount: PropTypes.number,
  openCount: PropTypes.number,
  onOpenClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  closedCount: 0,
  openCount: 0,
};

const mapStateToProps = (state, ownProps) => ({
  openCount: issueSelectors.getOpenIssuesCount(state),
  closedCount: issueSelectors.getClosedIssuesCount(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onOpenClick: issueActions.onOpenClick(dispatch),
  onCloseClick: issueActions.onCloseClick(dispatch),
})

export default connect(
mapStateToProps, mapDispatchToProps
)(Tabs);
