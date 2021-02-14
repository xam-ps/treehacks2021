import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import firebase from "firebase";

let isAuthenticated = false;
var user = firebase.auth().currentUser;
if (user) {
	isAuthenticated = true;
}

const PrivateRoute = ({ component: Component }) => (
	<Fragment>
		{
			<Route
				render={(props) =>
					isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
				}
			/>
		}
	</Fragment>
);

export default PrivateRoute;
