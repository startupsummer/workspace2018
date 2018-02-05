import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import './issuePage.styles.css';

const IssuePage = (props) => {
  const { id } = props;
  const targetIssue = props.data.find(item => item.id === +id);

  return (
    <div className="issue-page">
      <div className="issue-page__header">
        <h1 className="issue-page__title">{ targetIssue.title }</h1>
      </div>
      <div className="issue-page__body">
        <p className="issue-page__description">
          { targetIssue.body }
        </p>
      </div>
    </div>
  );
};

IssuePage.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default IssuePage;
