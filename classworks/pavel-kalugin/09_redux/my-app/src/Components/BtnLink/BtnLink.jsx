import React from 'react';
import cn from 'classnames';
import './BtnLink.styles.css';

import { connect } from 'react-redux';
import * as btnLinkActions from '../../resources/btnLink/btnLink.actions.js';
import * as btnLinkSelectors from '../../resources/btnLink/btnLink.selectors.js';

class BtnLink extends React.Component {
  clickHandler = () => {
    this.props.setActive(this.props.type);
  }

  render() {
    const btnClass = cn({
      'btn-link': true,
      'btn-link--selected': this.props.isSelected,
    });

    return (
      <button className={btnClass} type="button" onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BtnLink);
