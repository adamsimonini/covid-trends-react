import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangToggle from "@components/LangToggle";
import DataLoader from "@components/DataLoader";
import Map from "@components/Map";
// import Stream from "@components/Charts/Stream";
// import Recharts from "@components/Charts/Recharts";
import "./style.css";

function App() {
	const { t } = useTranslation();
	return (
		<Router>
			<LangToggle />
			<div id="app">
				<span>{t("welcomeToCTR")}</span>
				{/* <Map /> */}
				{/* <Stream /> */}
				{/* <Recharts /> */}
				<Switch>
					<Route exact path={"/"}></Route>
					<Route exact path={"/Map"} component={Map}></Route>
					<Route exact path={"/data"} component={DataLoader}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
