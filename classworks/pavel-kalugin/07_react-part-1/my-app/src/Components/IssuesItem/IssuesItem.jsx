import React from 'react';
import cn from 'classnames';
import './IssuesItem.styles.css';
import Btn from '../Btn/Btn';


class IssuesItem extends React.Component {
  closeIssue = () =>
    this.props.closeIssue(this.props.id);

  reopenIssue = () =>
    this.props.reopenIssue(this.props.id);

  render() {
    const status = cn({
      issues__status: true,
      'issues__status--open': this.props.isOpen,
      'issues__status--closed': !this.props.isOpen,
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
        <Btn class="issue__close" clickHandler={this.props.isOpen ? this.closeIssue : this.reopenIssue}>
          {this.props.isOpen ? 'Close' : 'Reopen'} issue
        </Btn>
      </li>
    );
  }
}

export default IssuesItem;
