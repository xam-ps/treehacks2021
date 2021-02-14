import React from "react";
import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	BrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import PlaylistPage from "./pages/PlaylistPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PrivateRoute from "./PrivateRoute";
export default function App() {
	return (
		<Router>
			<main>
				<Route path="/" exact component={LandingPage} />
				<Route path="/login" exact component={LoginPage} />
				<PrivateRoute path="/dashboard" exact component={DashboardPage} />
				<PrivateRoute path="/playlist" exact component={PlaylistPage} />
				<PrivateRoute path="/leaderboard" exact component={LeaderboardPage} />
				<PrivateRoute path="/notifications" exact component={PlaylistPage} />
			</main>
		</Router>
	);
}
