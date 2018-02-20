import React from 'react';
import PropTypes from 'prop-types';
import './NewIssue.css';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issues/issues.actions';

const NewIssue = (props) => {
    return(
    <button onClick={props.newIssue} className="btn btn-primary" type="button">
        New issue
    </button>
);
}

NewIssue.propTypes = {
    newIssue: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    newIssue: issueActions.createIssue(dispatch)
})
  
export default connect(
  null, mapDispatchToProps
)(NewIssue);