const token = '40ad94d8ade88ffd03134cf06caa464b0265742b';
const apiUri = 'https://api.github.com/repos/maxmabius';

const fetchWithToken = async (url, options = {}) => {
  const response = await fetch(
    url,
    {
      ...options,
      headers: {
        // eslint-disable-next-line
        'Authorization': `token ${token}`,
      },
    },
  );
  const data = await response.json();
  return data;
};

export async function getIssues() {
  try {
    return await fetchWithToken(`${apiUri}/task9/issues?state=all`);
  } catch (err) {
    return err.response.data;
  }
}

export async function switchIssueStatus(issue) {
  try {
    const updateStatus = issue.state === 'open' ? 'closed' : 'open';

    return await fetchWithToken(`${apiUri}/task9/issues/${issue.number}`, {
      method: 'PATCH',
      body: JSON.stringify({
        state: updateStatus,
      }),
    });
  } catch (err) {
    return err.response.data;
  }
}

export async function createIssue() {
  try {
    return await fetchWithToken(`${apiUri}/task9/issues`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'One More Issue',
        body: 'How can you complain about bugs, Mr. Anderson, when you have no... operating system...',
      }),
    });
  } catch (err) {
    return err.response.data;
  }
}
