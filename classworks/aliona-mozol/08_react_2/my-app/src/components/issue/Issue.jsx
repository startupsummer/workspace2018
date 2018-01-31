import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './issue.styles.css';
import Button from '../button/Button';

class Issue extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    switchIssueState: PropTypes.func.isRequired,
  };

  state = {
    text: this.props.state === 'open' ? 'Close' : 'Open',
    svg: this.props.state === 'open' ? 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z'
      : 'M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z',
  }

  render() {
    const issueClass = cn({
      issues__status: true,
      'issues__status--open': this.props.state === 'open',
      'issues__status--closed': this.props.state === 'closed',
    });
    return (
      <span className="issues__item">
        <div className={issueClass}>
          <svg className="issues__icon" fill="red" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d={this.state.svg} /></svg>
        </div>
        <div className="issues__title">
          <Link to={`/${this.props.id}`} className="issues__link">
            {this.props.title}
          </Link>
        </div>
        <Button
          type={this.props.state}
          onClick={this.props.switchIssueState(this.props.id)}
        >
          {this.state.text}
        </Button>
      </span>
    );
  }
}

export default Issue;
