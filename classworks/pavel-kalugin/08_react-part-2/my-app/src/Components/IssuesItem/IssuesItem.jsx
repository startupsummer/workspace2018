import React from 'react';
import cn from 'classnames';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
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
      'issues__status--open': this.props.state === 'open',
      'issues__status--closed': !this.props.state === 'closed',
    });


    return (
      <li className="issues__item">
        <div className={status}>
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" /></svg>
        </div>
        <div className="issues__title">
          <Link to={'/'+this.props.id} className="issues__link">
            {this.props.title}
          </Link>
        </div>
        <Btn class="issue__close" clickHandler={this.props.state === 'open' ? this.closeIssue : this.reopenIssue}>
          {this.props.state === 'open' ? 'Close' : 'Reopen'} issue
        </Btn>
      </li>
    );
  }
}

export default IssuesItem;
