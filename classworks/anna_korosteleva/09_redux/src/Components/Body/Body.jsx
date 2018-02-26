import React from 'react';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import Issue from '../Issue/Issue';
import PageHead from '../PageHead/PageHead';
import NewIssue from '../NewIssue/NewIssue';
import './Body.css';

const Body = () => {
	return (
		<React.Fragment>
			<PageHead />
			<div className="container">
				<div className="issues-listing">
					<div className="issues-listing__subnav">
						<div className="subnav">
							<Search />
							<NewIssue />
						</div>
					</div>
					<Tabs />
					<Issue />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Body;
