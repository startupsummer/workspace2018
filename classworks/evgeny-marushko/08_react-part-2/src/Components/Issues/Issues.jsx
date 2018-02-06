/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import Issue from '../Issue/Issue';
import closed from '../../svg/closed.svg';
import open from '../../svg/open.svg';
import closedI from '../../svg/closed_i.svg';
import openI from '../../svg/open_i.svg';
import searchIcon from '../../svg/search.svg';
import IssuePage from '../IssuePage/IssuePage';
import IssuesList from '../IssuesList/IssuesList';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
        <Route exact path="/" render={ () => 
          <div className="issues-listing__subnav">
            <div className="subnav">
              <form className="subnav_search">
                <input className="subnav__search-input" type="text" placeholder="Search" />
                <img alt="" className="subnav__search-icon" src={searchIcon} />
             </form>
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.props.newIssue}>New issue</button>
            </div>
          </div>
        }/>
        <Route exact path="/" render={ () => 
          <div className="issues-listing__header">
            <div className="issues-listing__states">
              <button className={'btn-link ' + ( this.state.showOpen ? 'btn-link--selected' : '')} type="button" onClick={this.showOpen.bind(this)}>
                <img alt="" className="octicon" src={open} />
                {this.props.openIssues.length} Open
              </button>
              <button className={'btn-link ' + ( !this.state.showOpen ? 'btn-link--selected' : '')} type="button" onClick={this.showClosed.bind(this)}>
                <img alt="" className="octicon" src={closed} />
                {this.props.closedIssues.length} Closed
              </button>
            </div>
          </div>
        }/>
        <div className="issues-listing__body">
          <ul className="issues">
            <Route path="/issue/:id" render={ (props) => <IssuePage openList={this.props.openIssues} closedList={this.props.closedIssues} id={props.match.params.id}/> }/>
            <Route exact path="/" render={ () => <IssuesList
              mainContext={this.props.mainContext}
              openFunc={this.props.openIssue}
              closeFunc={this.props.closeIssue}
              action={this.state.showOpen ? 'Close' : 'Open'}
              icon={this.state.showOpen ? openI : closedI}
              openList={this.props.openIssues}
              closedList={this.props.closedIssues}
              showState={this.state.showOpen}
              /> }/>
          </ul>
        </div>
      </div>
    );
  }
}

export default Issues;
