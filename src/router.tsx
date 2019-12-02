import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
	Route,
	Link
} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import WorkPage from './pages/Work/WorkPage';
import ContactPage from './pages/Contact/ContactPage';
import AdminPage from './pages/Admin/AdminPage';

const AppRouter = ({user}:any) => (
	<Router>
		<div>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/work'>Work</Link>
			<Link to='/contact'>Contact</Link>
			{user && <Link to='/admin'>Admin</Link>}
		</div>

		<Switch>
			<Route path='/admin'>
				<AdminPage />
			</Route>
			<Route path='/about'>
				<AboutPage />
			</Route>
			<Route path='/work'>
				<WorkPage />
			</Route>
			<Route path='/contact'>
				<ContactPage />
			</Route>
			<Route path='/'>
				<HomePage />
			</Route>
		</Switch>
	</Router>
)

export default AppRouter;