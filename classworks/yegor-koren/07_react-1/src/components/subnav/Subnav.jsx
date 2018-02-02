import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../search_field/SearchField';
import ButtonNew from '../button_new/ButtonNew';
import './subnav.style.css';

const Subnav = ({
  changeFilterSearch,
  newIssue,
  isDescription,
  description,
}) => (
  isDescription ?
    (
      <div className="container">
        <div className="subnav subnav__description">
          <p>{description}</p>
        </div>
      </div>
    ) :
    (
      <div className="container issues-listing issues-listing__subnav">
        <div className="subnav">
          <SearchField changeFilterSearch={changeFilterSearch} />
          <ButtonNew newIssue={newIssue} />
        </div>
      </div>
    )
);

Subnav.propTypes = {
  newIssue: PropTypes.func.isRequired,
  changeFilterSearch: PropTypes.func.isRequired,
  isDescription: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Subnav;
