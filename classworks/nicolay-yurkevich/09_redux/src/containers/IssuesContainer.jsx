import { connect } from 'react-redux'
import Issues from '../components/issues/Issues'
import {ToggleIssueState,getIssueList} from '../resources/actions'

const mapStatetoProps = (state, ownProps) =>{
  console.log(state.data);
  if (state.data===undefined){
    return ;
  }
return {
  issues:  state.data.filter(item => state.currentState === item.state)
}
}
const mapDispatchToProps = (dispatch) =>( {
  toggleIssueState: (issue) => {
    console.log(issue);
    return dispatch(ToggleIssueState(issue))
  }
});

const IssuesContainer = connect (
   mapStatetoProps,
   mapDispatchToProps) 
(Issues);

export default IssuesContainer;