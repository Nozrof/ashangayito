import React from 'react';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Privacy from '../../Pages/Privacy';
import Events from '../../Pages/Events';
import Security from '../../Pages/Security';
import Home from '../../Pages/Home';
import PageInformation from '../../Pages/PageInformation';
import NotFound from '../../Pages/NotFound';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Middleproperty() {
	return (
		<Switch>
			<Redirect exact from='/' to='/home' />
			<Route path='/home' component={Home} />
			<Route path='/about' component={AboutUs} />
			<Route path='/privacy' component={Privacy} />
			<Route path='/events' component={Events} />
			<Route path='/security' component={Security} />
			<Route path='/info' component={PageInformation} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
}
