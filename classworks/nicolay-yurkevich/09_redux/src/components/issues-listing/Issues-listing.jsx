import React from 'react'
import './Issues-listing.styles.css'
import BtnLinkContainer from '../../containers/Btn-linkContainer.jsx'
import IssuesContainer from '../../containers/IssuesContainer.jsx'
import SubnavContainer from '../../containers/SubnavContainer.jsx'

function IssuesListing (){
    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
            <SubnavContainer />
          </div>
        <div className="issues-listing__header">
          <div className="issues-listing__states">
          <BtnLinkContainer text={'Open'}>
              <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
              </svg>
          </BtnLinkContainer>
            <BtnLinkContainer text={'Closed'}>
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path>
              </svg>
            </BtnLinkContainer>
          </div>
        </div>
        <div className="issues-listing__body">
          <IssuesContainer/>
        </div>
      </div>
      );
}
export default IssuesListing;