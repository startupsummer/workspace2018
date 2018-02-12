import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import SubnavDescription from '../subnav_description/SubnavDescription';
import IssuesList from '../issues_list/IssuesList';
import IssueDescription from '../issue_description/IssueDescription';
import './main.style.css';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }
  setDescription = (data) => {
    this.setState({ description: data });
  }

  render() {
    const issuesNumber = this.props.issues.filter(item => item.state === 'open').length;

    return (
      <Router>
        <div className="content">
          <PageHead
            issuesNumber={issuesNumber}
          />
          <Route
            exact
            path="/"
            render={() => (<Subnav
              newIssue={this.props.newIssue}
              changeFilterSearch={this.props.changeFilterSearch}
            />)}
          />
          <Route
            path="/description"
            render={() => (<SubnavDescription
              newIssue={this.props.newIssue}
              changeFilterSearch={this.props.changeFilterSearch}
              description={this.state.description}
            />)}
          />
          <Route
            exact
            path="/"
            render={() => (<IssuesList
              changeFilter={this.props.changeFilter}
              changeIssue={this.props.changeIssue}
              filter={this.props.filter}
              issues={this.props.issues}
              filterSearch={this.props.filterSearch}
              setDescription={this.setDescription}
            />)}
          />
          <Route path="/description" component={IssueDescription} />
        </div>
      </Router>
    );
  }
}

Main.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  newIssue: PropTypes.func.isRequired,
  changeIssue: PropTypes.func.isRequired,
  changeFilterSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  filterSearch: PropTypes.string.isRequired,
};

export default Main;
