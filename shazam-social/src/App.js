import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<main>
				<nav>
					<ul>
						<li>
							<Link to="/">Home </Link>
						</li>
						<li>
							<Link to="/signup">Signup </Link>
						</li>
						<li>
							<Link to="/login">Login </Link>
						</li>
					</ul>
				</nav>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/login" exact component={Login} />
			</main>
		</Router>
	);
}

const Home = () => (
	<React.Fragment>
		<h1> Home </h1>
	</React.Fragment>
);
const Signup = () => (
	<React.Fragment>
		<h1> Signup </h1>
	</React.Fragment>
);
const Login = () => (
	<React.Fragment>
		<h1> Login </h1>
	</React.Fragment>
);
