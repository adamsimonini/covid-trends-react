import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<test>covid trends react</test>
				<Switch>
					<Route exact path={"/"}></Route>
					<Route></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
