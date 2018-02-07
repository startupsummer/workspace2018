import React from 'react';
import PropTypes from 'prop-types';
import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import IssuesList from '../issues_list/IssuesList';
import './main.style.css';

class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isDescription: false,
      description: '',
    };
  }
  descriptionOn = (data) => {
    this.setState({ isDescription: true, description: data });
  }
  descriptionOff = () => {
    this.setState({ isDescription: false });
  }

  render() {
    return (
      <div className="content">
        <PageHead
          issues={this.props.issues}
          descriptionOff={this.descriptionOff}
        />
        <Subnav
          newIssue={this.props.newIssue}
          changeFilterSearch={this.props.changeFilterSearch}
          isDescription={this.state.isDescription}
          description={this.state.description}
        />
        <IssuesList
          changeFilter={this.props.changeFilter}
          changeIssue={this.props.changeIssue}
          filter={this.props.filter}
          issues={this.props.issues}
          filterSearch={this.props.filterSearch}
          isDescription={this.state.isDescription}
          descriptionOn={this.descriptionOn}
        />
      </div>
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
