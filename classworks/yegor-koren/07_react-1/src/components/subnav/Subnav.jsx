import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../search_field/SearchField';
import Button from '../button/Button';
import './subnav.style.css';

const classNames = require('classnames');

const Subnav = ({
  changeFilterSearch,
  newIssue,
}) => {
  const buttonStyle = classNames('btn', 'btn-primary');
  return (
    <div className="container issues-listing issues-listing__subnav">
      <div className="subnav">
        <SearchField changeFilterSearch={changeFilterSearch} />
        <Button
          action={newIssue}
          content="New Button"
          buttonStyle={buttonStyle}
          id={1}
        />
      </div>
    </div>
  );
};

Subnav.propTypes = {
  newIssue: PropTypes.func.isRequired,
  changeFilterSearch: PropTypes.func.isRequired,
};

export default Subnav;
