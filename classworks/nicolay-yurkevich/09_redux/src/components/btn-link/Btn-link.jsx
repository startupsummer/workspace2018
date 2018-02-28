import React from "react"
import cn from "classnames"
import "./Btn-link.styles.css"
import { connect } from "react-redux"
import * as issuesSelector from "../../resources/selectors.js"
import * as issuesActions from "../../resources/actions.jsx"

function BtnLink({children, count, text, isSelected, onClickState,}) {
  const btnClass = cn({
	"btn-link": true,
     	"btn-link--selected": isSelected,
  })
    return (
      <button className={btnClass} onClick={() => { onClickState(text.toLowerCase()) }} >
        {children}
        {count}
        {text}
      </button>
  );
}

export default connect(
  (store, ownProps) => (issuesSelector.getSpecificsForBtnLink(store, ownProps)),
  dispatch => ({
    onClickState: (state) => { dispatch(issuesActions.setCurState(state)) },
  }),
)(BtnLink);
