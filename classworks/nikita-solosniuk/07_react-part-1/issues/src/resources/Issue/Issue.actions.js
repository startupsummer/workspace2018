export const getIssueList = () =>
  dispatch => {
    fetch('https://api.github.com/repos/SobakaSlava/cuddly-adventure/issues?access_token=165715f1a4ec8909a80cbac8d5c4db8b3bfaa3dd&state=all')
      .then(data => data.json())
      .then(payload => dispatch({ type: 'GET_DATA', payload }));
    };

export const changeState = issue => dispatch => {
  console.log(issue);
  fetch(`https://api.github.com/repos/SobakaSlava/cuddly-adventure/issues/${issue.number}?access_token=165715f1a4ec8909a80cbac8d5c4db8b3bfaa3dd`, {
    method: 'PATCH',
    body: JSON.stringify({
      state: (issue.state === 'open') ? 'closed' : 'open',
    })})
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'ISSUE_CHANGED',
        payload: {
          id: data.id,
          state: data.state,
          title: data.title,
          number: data.number,
        },
      });
    })
  .catch(err => console.log(err));
};

export const newIssue = () => dispatch => {
  const randomValue = Math.random();

  fetch('https://api.github.com/repos/SobakaSlava/cuddly-adventure/issues?access_token=165715f1a4ec8909a80cbac8d5c4db8b3bfaa3dd', {
    method: 'POST',
    body: JSON.stringify({
      state: 'open',
      title: String(randomValue),
      id: randomValue,
      body: randomValue + ' is a real problem!'
    })
  })
    .then(res => res.json())
    .then(data =>  dispatch({
      type: 'NEW_ISSUE',
      payload: {
        id: data.id,
        state: data.state,
        title: data.title,
        number: data.number,
      }
    }));
  };

