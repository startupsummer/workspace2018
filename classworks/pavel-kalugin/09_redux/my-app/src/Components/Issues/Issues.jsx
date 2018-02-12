import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Issues.styles.css';
import IssuesItem from '../IssuesItem/IssuesItem';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

class Issues extends React.PureComponent {
  render() {
    return (
      <ul className="issues">
        {this.props.issues
          .filter(item => this.props.activeTab === item.state)
          .map(item => <IssuesItem key={item.id.toString()} id={item.id} />)
        }
      </ul>
    );
  }
}

Issues.propTypes = {
  activeTab: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  issues: issuesSelectors.getIssues(state),
  activeTab: issuesSelectors.getActiveTab(state),
  searchQuery: issuesSelectors.getSearchQuery(state),
});

export default connect(
  mapStateToProps,
  null,
)(Issues);
