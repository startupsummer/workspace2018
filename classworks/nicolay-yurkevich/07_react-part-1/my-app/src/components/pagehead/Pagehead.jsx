import React from 'react'
import '../../base/base.styles.css'
import './Pagehead.styles.css'
import '../reponav/Reponav.styles.css'
import PageheadTitle from '../pagehead-title/pagehead-title.jsx'
import Reponav from '../reponav/Reponav.jsx'

class Pagehead extends React.Component{

	render(){
		return (
      <div className="pagehead" >
        <div className="container repohead-container"><PageheadTitle/></div>
        <div className='container'><Reponav openIssues={this.props.openIssues}/></div> 
	  </div>
      )
	}
}
export default Pagehead;