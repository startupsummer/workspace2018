import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import IssueList from '../IssueList/IssueList';
import './Issue.css';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issues/issues.selectors';
import * as issueActions from '../../resources/issues/issues.actions';
import { getIssuesByViewState } from '../../resources/issues/issues.selectors';

const Issue = (props) => {
	const iconStyle = classNames({
		'issues__status issues__status--open': props.condition === 'open',
		'issues__status issues__status--closed': props.condition === 'closed'
	});
	return (
		<div className="issues-listing__body">
			<ul className="issues">
				{ props.getIssuesByViewState.map(item => 
					( <IssueList key={item.id} id={item.id} 
						iconStyle={iconStyle} item={item} title={item.title} />))}
			</ul>
		</div>
	);
};

Issue.propTypes = {
	condition: PropTypes.string,
	items: PropTypes.array.isRequired,
};

export default connect(
	state => ({
		items: issueSelectors.getIssues(state),
		condition: issueSelectors.getViewState(state),
		getIssuesByViewState: issueSelectors.getIssuesByViewState(state),
	}))(Issue);

