import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

// import { Redirect, Route, Router, Switch } from 'react-router';

// const Routes = () => {
// 	return (
// 		<Switch>
// 			<Route path="/" component={ App } />
// 		</Switch>
// 	);
// };

ReactDom.render(<App />, document.getElementById('root'));
