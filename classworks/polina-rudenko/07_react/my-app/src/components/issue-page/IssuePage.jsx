import React from 'react';
import PropTypes from 'prop-types';
import './issue-page.styles.css';


const IssuePage = (props) => {
  const { id } = props;
  const updateIssue = props.issuesArr.find(item => item.id === +id);
  return (
    <div className="issue-page">
      <div className="issue-page__header">
        <h1 className="issue-page__title">
          { updateIssue.title }
        </h1>
      </div>
      <div className="issue-page__body">
        <p className="issue-page__description">
        Bash shell builtin help is missing in the guide.
        </p>
      </div>
    </div>
  );
};

IssuePage.propTypes = {
  id: PropTypes.string.isRequired,
  issuesArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['open', 'closed']).isRequired,
  }).isRequired).isRequired,
};

export default IssuePage;
