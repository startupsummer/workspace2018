import React from 'react';
import PropTypes from 'prop-types';
import './IssuesPage.styles.css';

class IssuesPage extends React.Component {
  render() {
    console.log(this.props);
    const issue = this.props.issues.find(item => item.id === this.props.id);

    return (
      <div className="container issues-page">
        <h1> You opened {issue.title} issue! </h1>
        <h2> Description: {issue.body} </h2>
      </div>
    );
  }
}

IssuesPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IssuesPage;
