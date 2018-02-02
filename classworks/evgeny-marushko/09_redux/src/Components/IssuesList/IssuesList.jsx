/* eslint-disable linebreak-style, jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';
import closedIssueIcon from './closed_i.svg';
import openIssueIcon from './open_i.svg';

const IssuesList = (props) => {
  return (
    <ul className="issues">
      {props.list.map((issue) => {
        return (
          <li className="issues__item" key={issue.id}>
            <Issue
              action={(props.viewState === 'open') ? 'Close' : 'Open'}
              changeState={props.changeState}
              issue={issue}
              icon={(props.viewState === 'open') ? openIssueIcon : closedIssueIcon}
            />
          </li>
        );
      })}
    </ul>
  );
};

IssuesList.propTypes = {
  changeState: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.strung,
  })).isRequired,
  viewState: PropTypes.string.isRequired,
};

export default IssuesList;
