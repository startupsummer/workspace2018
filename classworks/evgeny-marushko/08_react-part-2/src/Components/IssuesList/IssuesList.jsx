import React, { Component } from 'react';
import Issue from '../Issue/Issue';

const IssuesList = (props) => {
	console.log(props);
	if(props.showState) {
		return props.openList.map((issue) => {
			return <Issue
				id={issue.id}
				key={issue.id}
				title={issue.title}
				action={props.action}
				icon={props.icon}
				onClick={props.closeFunc.bind(props.mainContext, issue)}
			/>
		});
	} else {
		return props.closedList.map((issue) => {
			return <Issue
				id={issue.id}
				key={issue.id}
				title={issue.title}
				action={props.action}
				icon={props.icon}
				onClick={props.openFunc.bind(props.mainContext, issue)}
			/>
		});
	}
}

export default IssuesList;