import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";

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
				<Route path="/" exact component={LandingPage} />
				<Route path="/signup" exact component={SignupPage} />
				<Route path="/login" exact component={LoginPage} />
			</main>
		</Router>
	);
}
