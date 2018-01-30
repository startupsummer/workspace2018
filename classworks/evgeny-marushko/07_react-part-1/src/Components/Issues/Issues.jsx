import React, { Component } from 'react';
import Issue from '../Issue/Issue.jsx';
import closed from '../../svg/closed.svg';
import open from '../../svg/open.svg';
import closedI from '../../svg/closed_i.svg';
import openI from '../../svg/open_i.svg';
import searchIcon from '../../svg/search.svg';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = { showOpen: true };
  }
  showOpen() {
    this.setState({ showOpen: true });
  }
  showClosed() {
    this.setState({ showOpen: false });
  }
  render() {
    return (
      <div className="container">
        <div className="issues-listing__subnav">
          <div className="subnav">
            <form className="subnav_search">
              <input className="subnav__search-input" type="text" placeholder="Search" />
              <img alt="" className="subnav__search-icon" src={searchIcon} />
            </form>
            <button className="btn btn-primary" type="button" onClick={this.props.newIssue}>New issue</button>
          </div>
        </div>
        <div className="issues-listing__header">
          <div className="issues-listing__states">
            <button className={'btn-link ' + ( this.state.showOpen ? 'btn-link--selected' : '')} type="button" onClick={this.showOpen.bind(this)}>
              <img alt="" className="octicon" src={open}/>
              {this.props.openIssues.length} Open
            </button>
            <button className={'btn-link ' + ( !this.state.showOpen ? 'btn-link--selected' : '')} type="button" onClick={this.showClosed.bind(this)}>
              <img alt="" className="octicon" src={closed} />
              {this.props.closedIssues.length} Closed
            </button>
          </div>
        </div>
        <div className="issues-listing__body">
          <ul className="issues">
            {
              this.state.showOpen
                ? this.props.openIssues.map((issue) => {
                  return <Issue
                    key={issue.id}
                    title={issue.title}
                    action={'close'}
                    icon={openI}
                    onClick={this.props.closeIssue.bind(this.props.mainContext, issue)}
                  />
                })
                : this.props.closedIssues.map((issue) => {
                  return <Issue
                    key={issue.id}
                    title={issue.title}
                    action={'open'}
                    icon={closedI}
                    onClick={this.props.openIssue.bind(this.props.mainContext, issue)}
                  />
                })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Issues;