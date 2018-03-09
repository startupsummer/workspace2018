import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as issueSelectors from './resources/issue/issue.selectors';

import Header from './components/header/Header';
import Main from './components/main/Main';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      filter: 'open',
      filterSearch: '',
    };
  }

  componentDidMount() {
    // fetch('https://api.github.com/repos/purpleow1/react/issues?access_token=8684cc62a95b587704cf199ad98905c67533f63b&state=all')
    //   .then(response => response.json())
    //   .then(data => this.setState({ issues: data }));
  }

  changeFilter = filter => this.setState({ filter })
  newIssue = () => {
    // const { issues } = this.state;
    // const newID = Math.floor(Math.random() * 1000000000);
    // const newTitle = WalterWhite[Math.floor(Math.random() * WalterWhite.length)];
    // const newState = 'open';
    // const newIssue = {
    //   id: newID,
    //   title: newTitle,
    //   state: newState,
    // };
    // this.setState({ issues: [newIssue, ...issues] });

    // this.props.store.dispatch({
    //   type: NEW_ISSUE,
    //   issue: newIssue,
    // });
    // fetch('https://api.github.com/repos/purpleow1/react/issues?access_token=8684cc62a95b587704cf199ad98905c67533f63b&state=all', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newIssue),
    // });
  }
  changeIssue = (id) => {
    const { issues } = this.state;
    const newIssues = issues.map((item) => {
      if (item.id === id) {
        const timeItem = { ...item };
        if (timeItem.state === 'open') timeItem.state = 'closed';
        else timeItem.state = 'open';

        // fetch(`https://api.github.com/repos/purpleow1/react/issues/${timeItem.number}?access_token=8684cc62a95b587704cf199ad98905c67533f63b&state=all`, {
        //   method: 'PATCH',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //   },
        //   body: JSON.stringify({
        //     state: timeItem.state,
        //   }),
        // });

        return timeItem;
      }
      return item;
    });
    this.setState({ issues: [...newIssues] });
  }

  changeFilterSearch = (filterSearch) => {
    this.setState(state => ({ ...state, filterSearch }));
  }

  render() {
    // console.log(this.props.issues);
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route
            path="/"
            render={() => (<Main
              changeFilter={this.changeFilter}
              changeIssue={this.changeIssue}
              changeFilterSearch={this.changeFilterSearch}
              filter={this.props.filter}
              issues={this.props.issues}
              filterSearch={this.state.filterSearch}
            />)}
          />
        </React.Fragment>
      </Router>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user,
//   };
// }

const mapStateToProps = state => ({
  issues: issueSelectors.getIssues(state),
  filter: issueSelectors.getFilter(state),
});


export default connect(mapStateToProps, null)(App);
