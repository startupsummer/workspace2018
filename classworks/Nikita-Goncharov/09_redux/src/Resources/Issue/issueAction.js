function addIssue() {
  return {
    type: 'ADD_ISSUE',
    payload: ''
  }
}

function closeIssue(id) {
  return {
    type: 'CLOSE_ISSUE',
    payload: id
  }
}

function showOpen() {
  return {
    type: 'SHOW_OPEN',
    payload: ''
  }
}

function showClose() {
  return {
    type: 'SHOW_CLOSE',
    payload: ''
  }
}

export default { addIssue, closeIssue, showOpen, showClose };
