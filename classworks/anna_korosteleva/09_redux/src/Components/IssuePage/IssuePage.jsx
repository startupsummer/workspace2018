import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issues/issues.selectors';

const IssuePage = ({ title }) => (
	<div className="issue-page">
		<div className="issue-page__header">
			<h1 className="issue-page__title">{`You clicked on "${title}" issue`}</h1>
		</div>
	</div>
);

IssuePage.propTypes = {
	title: PropTypes.string,
};

IssuePage.defaultProps = {
	title: '',
};

export default connect(state => ({
	title: issueSelectors.getIssueTitle(state)
}))(IssuePage);
