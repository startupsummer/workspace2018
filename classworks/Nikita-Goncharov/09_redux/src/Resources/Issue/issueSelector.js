import issues from '../../issues-data.js';

//export default data;
export const data = issues;

export const getIssue = (props) => {
  return props.issuesList.find(item => `${item.id}` === props.itemId);
}

//export default data;
