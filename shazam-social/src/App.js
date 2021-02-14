import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import PlaylistPage from "./pages/PlaylistPage";

export default function App() {
	return (
		<Router>
			<main>
				<Route path="/" exact component={LandingPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/dashboard" exact component={DashboardPage} />
				<Route path="/playlist" exact component={PlaylistPage} />
				<Route path="/leaderboard" exact component={PlaylistPage} />
				<Route path="/notifications" exact component={PlaylistPage} />
			</main>
		</Router>
	);
}
