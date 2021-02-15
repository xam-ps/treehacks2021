import React from "react";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import "./App.scss";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import LoginPage from "./pages/LoginPage";
import PlaylistPage from "./pages/PlaylistPage";
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
