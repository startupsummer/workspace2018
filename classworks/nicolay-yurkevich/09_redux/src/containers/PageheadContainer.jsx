import { connect } from 'react-redux'
import Pagehead from '../components/pagehead/Pagehead.jsx'

const mapStateToProps = (state) => {
  return ({
  openIssues: state.openIssues
})
};

const PageheadContainer = connect(
  mapStateToProps
) (Pagehead)
export default PageheadContainer;