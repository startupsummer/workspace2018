export const changeTabActionCreator = tabType => dispatch => {
    console.log(tabType);
    dispatch({
      type: 'CHANGE_TAB',
      activeTab: tabType,
    })
  };

export const createIssueActionCreator = () =>
  dispatch => {
    dispatch({
      type: 'CREATE_ISSUE',
      item: {
        id: Math.floor(Math.random() * 10000),
        title: 'kek!',
        state: 'open',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.`,
    },
  })
};

export const getDataActionCreator = () => dispatch => {
  fetch('url')
    .then(response => response.json())
    .then(payload => dispatch({
      type: 'FETCH_DATA',
      payload,
    }))
}
