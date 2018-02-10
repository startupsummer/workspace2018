import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonLink from '../ButtonLink/ButtonLink';
import IssuesSelectors from '../../resources/issues/issues.selectors';
import IssuesActions from '../../resources/issues/issues.actions';
import './ButtonsPanel.css';

function ButtonsPanel(props) {
  return (
    <div className="issues-listing__states">
      <ButtonLink
        isSelected={props.activeTab === 'open'}
        onButtonLinkClick={props.toggleActiveTab}
      >
        <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
          <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
        </svg>
        {`${props.openIssuesAmount} Open`}
      </ButtonLink>
      <ButtonLink
        isSelected={props.activeTab === 'closed'}
        onButtonLinkClick={props.toggleActiveTab}
      >
        <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
          <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
        </svg>
        {`${props.closedIssuesAmount} Closed`}
      </ButtonLink>
    </div>
  );
}

ButtonsPanel.propTypes = {
  openIssuesAmount: PropTypes.number.isRequired,
  closedIssuesAmount: PropTypes.number.isRequired,
  activeTab: PropTypes.string.isRequired,
  toggleActiveTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeTab: IssuesSelectors.getActiveTab(state),
  openIssuesAmount: IssuesSelectors.getOpenIssuesAmount(state),
  closedIssuesAmount: IssuesSelectors.getClosedIssuesAmount(state),
});

const mapDispatchToProps = {
  toggleActiveTab: IssuesActions.toggleActiveTab,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonsPanel);

