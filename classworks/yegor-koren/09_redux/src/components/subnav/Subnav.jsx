import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as issueActions from '../../resources/issue/issue.actions';
import SearchField from '../search_field/SearchField';
import Button from '../button/Button';

import './subnav.style.css';


const Subnav = ({
  newIssue,
}) => (
  <div className="container issues-listing issues-listing__subnav">
    <div className="subnav">
      <SearchField />
      <Button
        action={newIssue}
        primaryStyle
      >New Issue
      </Button>
    </div>
  </div>
);

Subnav.propTypes = {
  newIssue: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  newIssue: issueActions.newIssue,
});

export default connect(null, mapDispatchToProps)(Subnav);
