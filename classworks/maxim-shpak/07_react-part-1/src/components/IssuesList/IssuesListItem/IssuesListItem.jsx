import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';

import './IssuesListItem.css';

class IssuesListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.issue = {
      id: this.props.id,
      title: this.props.title,
    };
  }

  openIssue = () => this.props.openIssue(this.issue);

  closeIssue = () => this.props.closeIssue(this.issue);
  
  render() {
    const issuesStatusClassnames = cn({
      issues__status: true,
      'issues__status--opened': this.props.isOpened,
      'issues__status--closed': this.props.isClosed,
    });
    return (
      <li className="issues__item">
        <div className={issuesStatusClassnames}>
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
          </svg>
        </div>
        <div className="issues__title">
          <a href="/" className="issues__link">
            {this.props.title}
          </a>
        </div>
        <Button onButtonClick={this.props.isOpened ? this.closeIssue : this.openIssue}>
          {`${this.props.isOpened ? 'Close' : 'Open'} issue`}
        </Button>
      </li>
    );
  }
}

IssuesListItem.defaultProps = {
  isOpened: true,
  isClosed: false,
  title: 'title',
};

IssuesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOpened: PropTypes.bool,
  isClosed: PropTypes.bool,
  title: PropTypes.string,
  openIssue: PropTypes.func.isRequired,
  closeIssue: PropTypes.func.isRequired,
};

export default IssuesListItem;
