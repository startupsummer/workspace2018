import React, { Component } from 'react';

const IssuePage = (props) => {
	let issue;
	props.openList.forEach((element) => {
		if(element.id == props.id) {
			issue = element;
		}
	});
	props.closedList.forEach((element) => {
		if(element.id == props.id) {
			issue = element;
		}
	});
	return (
		<div>
		  <header className="issue-page--header">{issue.id}</header>
		  <main className="issue-page--main">{issue.title}</main>
		</div>
	)
}

export default IssuePage;
