import React from 'react';
import PropTypes from 'prop-types';

const NewIssue = ({ newIssue }) => (
    <button onClick={newIssue} className="btn btn-primary" type="button">
New issue
</button>
);

NewIssue.propTypes = {
    newIssue: PropTypes.func,
};

export default NewIssue;