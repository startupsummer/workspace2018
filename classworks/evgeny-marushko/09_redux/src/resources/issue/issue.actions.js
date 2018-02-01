/* eslint-disable arrow-parens, no-undef */
const token = '1023e3703d0ce88ec5e50d279115a576f72343b3';

export const getIssuesFromGithub = dispatch => () => {
  fetch(`https://api.github.com/repos/nrt3/07/issues?number=2&access_token=${token}&state=all`)
  .then(response => response.json())
  .then(data => dispatch({ type: 'NEW_ISSUE', issue: data }));
};

export const changeIssueState = dispatch => issue => {
  fetch(`https://api.github.com/repos/nrt3/07/issues/${issue.number}?access_token=${token}`,
    {
      method: 'PATCH',
      body: JSON.stringify(
        { state: issue.state === 'open' ? 'closed' : 'open' },
      ),
    },
  ).then(dispatch({ type: 'CHANGE_STATE', issue }));
};

export const createIssue = dispatch => () => {
  fetch(`https://api.github.com/repos/nrt3/07/issues?access_token=${token}`,
    {
      method: 'POST',
      body: JSON.stringify(
        { title: 'new_issue', body: 'paralect' },
      ),
    },
  ).then(response => response.json()).then(data => dispatch({ type: 'CREATE_ISSUE', issue: data }));
};

export const showOpen = dispatch => () => {
  dispatch({ type: 'SHOW_OPEN' });
};

export const showClosed = dispatch => () => {
  dispatch({ type: 'SHOW_CLOSED' });
};
