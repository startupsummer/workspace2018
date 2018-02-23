import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Body from './Components/Body/Body.jsx';
import IssuePage from './Components/IssuePage/IssuePage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.PureComponent {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<main className="content">
						<Route exact path="/" component={Body} />
						<Route exact path="/:id" component={IssuePage} />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
