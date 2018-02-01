export const getIssueList = () =>
  dispatch => {
    fetch('https://api.github.com/repos/SobakaSlava/cuddly-adventure/issues?access_token=165715f1a4ec8909a80cbac8d5c4db8b3bfaa3dd&state=all')
      .then(data => data.json())
      .then(data => dispatch({type: 'GET_DATA', payload: {
          issuesList: data,
        }}));
    };

export const changeState = issue =>
  async dispatch => {

  const newIssue = {
    ...issue,
    state: (issue.state === 'open') ? 'closed' : 'open',
  };

  const data = await fetch(`https://api.github.com/repos/SobakaSlava/cuddly-adventure/issues/${issue.number}?access_token=165715f1a4ec8909a80cbac8d5c4db8b3bfaa3dd`, {
    method: 'PATCH',
    body: JSON.stringify({
      state: (issue.state === "open") ? "closed" : "open",
    })}
  ).then(res => res.json());
    console.log(data);

  dispatch({
    type: 'ISSUE_CHANGED',
    payload: { id: data.id, state: data.state },
  });
};

