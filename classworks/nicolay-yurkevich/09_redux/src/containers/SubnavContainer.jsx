import React from 'react'
import { connect } from 'react-redux';
import {newIssue} from '../resources/actions.jsx'
import Subnav from '../components/subnav/Subnav.jsx'

const mapDispatchToProps = (dispatch) => ({
  addNewIssue: ()=> dispatch(newIssue())
})

const SubnavContainer = connect(null, mapDispatchToProps)(Subnav);
export default SubnavContainer;