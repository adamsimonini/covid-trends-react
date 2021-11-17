import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangToggle from "@components/LangToggle";
import DataLoader from "@components/DataLoader";
import Map from "@components/Map";
import Button from "@material-ui/core/Button";
import StorageIcon from "@material-ui/icons/Storage";
import HomeIcon from "@material-ui/icons/Home";
// import Stream from "@components/Charts/Stream";
// import Recharts from "@components/Charts/Recharts";
import "./style.css";

function App() {
	const { t } = useTranslation();
	return (
		<Router>
			<LangToggle />
			<div id="app">
				<h1>{t("welcomeToCDD")}</h1>
				{/* These are different test components. Feel free to uncomment in order to see what they produce */}
				{/* <Map /> */}
				{/* <Stream /> */}
				{/* <Recharts /> */}
				{/* At the moment this is the nav bar. It should become a dedicated nav bar eventually */}
				<Link to={{ pathname: "/" }}>
					<Button color="primary">
						<HomeIcon />
						{t("home")}
					</Button>
				</Link>
				<Link to={{ pathname: "/data" }}>
					<Button color="secondary">
						<StorageIcon />
						{t("exploreAPI")}
					</Button>
				</Link>
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
