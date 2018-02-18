import { connect } from 'react-redux';
import BtnLink from '../components/btn-link/Btn-link.jsx';
import {setCurState} from '../resources/actions.jsx'
  
const isSelectedTab = (cur,st) => {
  return st===cur?true:false;
}

const mapStateToProps = (state, ownProps) =>( {
  text: ownProps.text,
  count: ownProps.text==='Open'?state.openIssues:state.closedIssues,
  children: ownProps.children,
  isSelected: isSelectedTab(state.currentState, ownProps.text.toLowerCase())
  }
);
const mapDispatchToProps = (dispatch) => ({
  onClickState: (state)=>{dispatch(setCurState(state));}
});
const BtnLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (BtnLink);

export default BtnLinkContainer;