export const changeIssueState = (dispatch) => (id) => () => {
	dispatch({
		type: 'CHANGE_STATE',
		id,
	});
};

export const onTabClick = dispatch => payload => () => {
	dispatch({
		type: 'TAB_CLICK',
		payload,
	});
};

export const onIssueClick = dispatch => title => () => {
	dispatch({
		type: 'ISSUE_CLICK',
		payload: title,
	});
};

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