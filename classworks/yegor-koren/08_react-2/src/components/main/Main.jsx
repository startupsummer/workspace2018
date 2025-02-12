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
      descriptionTitle: '',
      descriptionBody: '',
    };
  }
  setDescription = (dataTitle, dataBody) => {
    let newDataBody = dataBody;
    if (!newDataBody) newDataBody = 'Default description';
    this.setState({ descriptionTitle: dataTitle, descriptionBody: newDataBody });
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
            path="/:id"
            render={() => (<SubnavDescription
              newIssue={this.props.newIssue}
              changeFilterSearch={this.props.changeFilterSearch}
              descriptionTitle={this.state.descriptionTitle}
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
          <Route
            path="/:id"
            render={() => (<IssueDescription
              descriptionBody={this.state.descriptionBody}
            />)}
          />
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
