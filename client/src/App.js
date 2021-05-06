import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangToggle from "@components/LangToggle";

function App() {
	const { t } = useTranslation();

	return (
		<Router>
			<LangToggle />
			<div>
				<span>{t("Welcome to CTR")}</span>
				<Switch>
					<Route exact path={"/"}></Route>
					<Route></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
