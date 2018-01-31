/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Issue extends Component {
  render() {
    return (
      <li className="issues__item">
        <img alt="" className="octicon" src={this.props.icon} />
        <div className="issues__title">
          <a href="#" className="issues__link">{this.props.title}</a>
        </div>
        <button className="btn" onClick={this.props.onClick}>{this.props.action} issue</button>
      </li>
    );
  }
}

export default Issue;
