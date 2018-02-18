import { connect } from 'react-redux'
import IssueDescription from  '../components/issue-description/Issue-description'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  let mum= state.data.find(item => {return item.id == ownProps.num})
  console.log(mum);
 return {
  arrItem: state.data.find(item => {return item.id == ownProps.num})
}; 
}

const IssueDescriptionContainer = connect(
mapStateToProps
) (IssueDescription);
export default IssueDescriptionContainer;