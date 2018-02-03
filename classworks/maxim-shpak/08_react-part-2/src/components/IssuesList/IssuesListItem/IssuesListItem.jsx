/* ----- Dependencies ----- */
import React from 'react';
import cn from 'classnames';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';

/* ----- Components ----- */
import Button from '../../Button/Button';

/* ----- Styles ----- */
import './IssuesListItem.css';

class IssuesListItem extends React.Component {
  constructor(props) {
    super(props);
    this.issue = {
      id: this.props.id,
      title: this.props.title,
    };
    this.openIssue = () => this.props.openIssue(this.issue);
    this.closeIssue = () => this.props.closeIssue(this.issue);
  }

  render() {
    const issuesStatusModifier = cn({
      'issues__status--opened': this.props.isOpened,
      'issues__status--closed': this.props.isClosed,
    });
    return (
      <li className="issues__item">
        <div className={`${'issues__status'}${' '}${issuesStatusModifier}`}>
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
          </svg>
        </div>
        <div className="issues__title">
          <Link href="/issues/:id" to={`${'/issues/'}${this.props.id}`} className="issues__link">
            {this.props.title}
          </Link>
        </div>
        <Button
          text={`${this.props.isOpened ? 'Close' : 'Open'}${' issue'}`}
          onButtonClick={this.props.isOpened ? this.closeIssue : this.openIssue}
        />
      </li>
    );
  }
}

IssuesListItem.defaultProps = {
  isOpened: true,
  isClosed: false,
  title: 'title',
  openIssue: () => console.log('openIssue does not work in IssuesListItem component'),
  closeIssue: () => console.log('closeIssue does not work in IssuesListItem component'),
};

IssuesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOpened: PropTypes.bool,
  isClosed: PropTypes.bool,
  title: PropTypes.string,
  openIssue: func,
  closeIssue: func,
};

export default IssuesListItem;
