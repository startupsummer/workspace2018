import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import './Issue.css';

class Issue extends Component {
  closeIssue = () => {
    this.props.changeItemState(this.props.item.id);
  };

  render() {
    return (
      <li className="issues__item">
        <div className="issues__status issues__status--open">
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
          </svg>
        </div>
        <div className="issues__title">
          <Link to={`/${this.props.item.id}`} activeClassName='active' className="issues__link">
            {this.props.item.title}
          </Link>
        </div>
        <Button ButtonClassName="btn issue__close" buttonData={this.props.item.state} />
        { this.props.item.state === 'open' &&
          <Button ButtonClassName="btn btn-primary" buttonData="Close issue" onClick={this.closeIssue} />
        }
      </li>
    );
  }
}

export default Issue;
