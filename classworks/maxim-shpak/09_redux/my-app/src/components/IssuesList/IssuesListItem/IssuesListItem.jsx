/* ----- Dependencies ----- */
import React from 'react';
import cn from 'classnames';

/* ----- Components ----- */
import Button from '../../Button/Button';

/* ----- Styles ----- */
import './IssuesListItem.css';

class IssuesListItem extends React.Component {
  closeIssue = () => this.props.closeIssue(this.props.id);
  reopenIssue = () => this.props.reopenIssue(this.props.id);
  render() {
    const status = cn({
      issues__status: true,
      'issues__status--opened': this.props.isOpened,
      'issues__status--closed': this.props.isClosed,
    });
    return (
      <li className="issues__item">
        <div className={status}>
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" /></svg>
        </div>
        <div className="issues__title">
          <a href="#home" className="issues__link">
            {this.props.text}
          </a>
        </div>
        <Button class="issue__close" clickHandler={this.props.isOpened ? this.closeIssue : this.reopenIssue}>
          {this.props.isOpened ? 'Close' : 'Open'} issue
        </Button>
      </li>
    );
  }
}

export default IssuesListItem;
