const isSelectedTab = (current, state) => (state === current)

export const getSpecificsForBtnLink = (state, ownProps) => ({
  text: ownProps.text,
  count: ownProps.text === "Open" ? state.openIssues : state.closedIssues,
  children: ownProps.children,
  isSelected: isSelectedTab(state.currentState, ownProps.text.toLowerCase()),
})

export const getIssueDescription = (state, ownProps) => ({
  arrItem: state.data.find(item => Number(item.id) === Number(ownProps.num),
})

export const getCurrentStateIssues = (state) => {
  if (state.data === undefined) {
    return
  }
  return {
    issues: state.data.filter(item => state.currentState === item.state),
  }
}

export const getOpenIssues = state => ({
  openIssues: state.openIssues,
})
