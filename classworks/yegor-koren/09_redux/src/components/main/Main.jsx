import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';

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
            component={Subnav}
          />
          <Route
            path="/:id"
            render={() => (<SubnavDescription
              descriptionTitle={this.state.descriptionTitle}
            />)}
          />
          <Route
            exact
            path="/"
            render={() => (<IssuesList
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
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  filterSearch: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  issues: issueSelectors.getIssues(state),
  filter: issueSelectors.getFilter(state),
  filterSearch: issueSelectors.getFilterSearch(state),
});

export default connect(mapStateToProps, null)(Main);
