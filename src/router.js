import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './components/Body/Body';

const MainRouter = () => (
	<div className="content">
		<Switch>
		  <Route exact path='/' component={Body}/>
		</Switch>
	</div>
);

export default MainRouter;
