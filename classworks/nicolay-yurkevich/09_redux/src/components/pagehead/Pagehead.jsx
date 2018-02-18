import React from 'react'
import '../../base/base.styles.css'
import './Pagehead.styles.css'
import '../reponav/Reponav.styles.css'
import PageheadTitle from '../pagehead-title/pagehead-title.jsx'
import Reponav from '../reponav/Reponav.jsx'

function Pagehead ({openIssues}){
		return (
      <div className="pagehead" >
        <div className="container repohead-container">
          <PageheadTitle/>
        </div>
        <div className='container'>
          <Reponav openIssues={openIssues}/>
        </div> 
	  </div>
      )
	}

export default Pagehead;