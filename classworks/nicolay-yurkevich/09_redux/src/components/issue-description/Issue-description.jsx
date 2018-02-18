import React from 'react'
import './Issue-description.styles.css'


export default function IssueDiscription({arrItem}){
  console.log(arrItem);
    return (
    <div>
      <h1 className="Issue-description__title">
        {arrItem.title}
      </h1>
      <p>
        {arrItem.body}
      </p>
    </div>
    );

}