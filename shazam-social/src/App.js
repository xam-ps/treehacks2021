import React from "react";
import "./App.module.scss";
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import CenteredContentWrapper from "./modules/CenteredContentWrapper";

export default function App() {
	return (
		<Router>
			<main>
				<CenteredContentWrapper>
					<nav>
						<ul>
							<li>
								<Link to="/">Home </Link>
							</li>
							<li>
								<Link to="/login">Login </Link>
							</li>
							<li>
								<Link to="/dashboard">Discover </Link>
							</li>
						</ul>
					</nav>
				</CenteredContentWrapper>
				<Route path="/" exact component={LandingPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/dashboard" exact component={DashboardPage} />
			</main>
		</Router>
	);
}
