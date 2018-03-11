import fetch from 'fetch';
import C from './constants';

export const ToggleIssueState = issue => (dispatch) => {
  fetch(`https://api.github.com/repos/kazeens/issues/issues/${issue.number}?access_token=fc191727f36885c4b1f9de0aceb0b581d788668a`, {
    method: 'PATCH',
    body: JSON.stringify({
      state: (issue.state === 'open') ? 'closed' : 'open',
    }),
  })
    .then(res => res.json())
    .then((data) => {
      dispatch({
        type: C.ToggleIssueState,
        payload: {
          id: data.id,
          state: data.state,
          title: data.title,
        },
      });
    });
};

export const getIssueList = () =>
  (dispatch) => {
    fetch('https://api.github.com/repos/kazeens/issues/issues?access_token=fc191727f36885c4b1f9de0aceb0b581d788668a&state=all')
      .then(data => data.json())
      .then(payload => dispatch({ type: C.GetIssues, payload }));
  };

export const newIssue = () => (dispatch) => {
  const id = Math.round(Math.random() * 1000000000);
  const number = id;
  fetch('https://api.github.com/repos/kazeens/issues/issues?access_token=fc191727f36885c4b1f9de0aceb0b581d788668a', {
    method: 'POST',
    body: JSON.stringify({
      number,
      id,
      title: `New issue ${id} that's been created`,
      state: 'open',
      body: 'Simple description Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }),
  }).then(res => res.json())
    .then((data) => {
      dispatch({
        type: C.OpenNewIssue,
        payload: {
          id: data.id,
          state: data.state,
          title: data.title,
          number: data.number,
        },
      });
    });
};

export const setCurState = st => (
  { type: C.SetCurrentState, payload: st }
);
