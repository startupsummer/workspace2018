import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './CloseIssue.css';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issues/issues.actions';
import * as issueSelectors from '../../resources/issues/issues.selectors';

const CloseIssue = (props) => {
	const buttonClass = classNames({
		'btn issue__close': props.condition === 'open',
		'btn-none': props.condition === 'closed'
	});
	return (
		<button onClick={props.changeIssueState(props.id)} className={buttonClass} id={props.id} type="button">
      Close issue
		</button>
	);
};

CloseIssue.propTypes = {
	id: PropTypes.number,
	condition: PropTypes.string,
};

CloseIssue.defaultProps = {
	id: 0,
	condition: 'open',
};

export default connect(
	state => ({
		condition: issueSelectors.getViewState(state)
	}),
	dispatch => ({
		changeIssueState: issueActions.changeIssueState(dispatch)
	}))(CloseIssue);