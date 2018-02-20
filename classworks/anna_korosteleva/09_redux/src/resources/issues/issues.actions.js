export const changeIssueState = dispatch => id => {
    dispatch({
      type: 'CHANGE_STATE',
      id: id.target.id,
    })
  };

  export const onOpenClick = dispatch => () => {
    dispatch({
      type: 'OPEN_TAB_CLICK',
      payload: 'open'
    })
  }

  export const onIssueClick = dispatch => title => {
    dispatch({
      type: 'ISSUE_CLICK',
      payload: title.target.title,
    })
  }
  export const onCloseClick = dispatch => () => {
    dispatch({
      type: 'CLOSE_TAB_CLICK',
      payload: 'closed'
    })
  }

  export const createIssue = dispatch => () => {
    dispatch({ 
      type: 'NEW_ISSUE', 
      payload:
      {
        id: Math.random() * 1000,
        title: 'new',
        state: 'open',
      },
    });
  };