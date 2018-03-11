import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import './Btn-link.styles.css';
import * as issuesSelector from '../../resources/selectors';
import * as issuesActions from '../../resources/actions';

function BtnLink({
  children, count, text, isSelected, onClickState,
}) {
  const btnClass = cn({
    'btn-link': true,
    'btn-link--selected': isSelected,
  });
  return (
    <button className={btnClass} onClick={() => { onClickState(text.toLowerCase()); }} >
      {children}
      {count}
      {text}
    </button>
  );
}

BtnLink.propTypes = {
  children: PropTypes.element.isRequired,
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickState: PropTypes.func.isRequired,
};

export default connect(
  (store, ownProps) => (issuesSelector.getSpecificsForBtnLink(store, ownProps)),
  dispatch => ({
    onClickState: (state) => { dispatch(issuesActions.setCurState(state)); },
  }),
)(BtnLink);
