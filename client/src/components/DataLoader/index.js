import React, { useEffect, useState } from "react";
import LocationData from "@components/LocationData";
import API from "@utilities/API";
import "./style.css";
import { TextField, Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function DataLoader() {
	const { t } = useTranslation();
	const [fsa, setFSA] = useState("");
	// const [locations, setLocations] = useState([]);
	// const [provinces, setProvinces] = useState([]);
	// const [healthRegions, sethealthRegions] = useState([]);
	const [fullLocationData, setFullLocationData] = useState([]);

	useEffect(() => {
		loadCompleteLocationDataAll();
		// loadAllProvinces();
		// loadAllHealthRegions();
		// loadAllFSAs();
	}, []);

	const loadCompleteLocationDataAll = () => {
		API.getCompleteDataAll().then(res => {
			console.log(res.data);
			setFullLocationData(res.data);
		});
	};

	const loadCompleteLocationDataForSingleFSA = fsa => {
		API.getCompleteLocationDataForSingleFSA(fsa).then(res => {
			console.log(res.data);
			setFullLocationData(res.data);
		});
	};

	const updateFSA = e => {
		setFSA(e.target.value);
	};

	const preventRefresh = e => {
		if (e.key == "Enter") {
			e.preventDefault();
			document.getElementById("getSingleFSAData").click();
			return false;
		}
	};
	// const loadAllFSAs = () => {
	// 	API.getAllFSAs()
	// 		.then(res => {
	// 			console.log(res.data);
	// 			setLocations(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// };

	// const loadAllProvinces = () => {
	// 	API.getAllProvinces()
	// 		.then(res => {
	// 			console.log(res.data);
	// 			setProvinces(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// };

	// const loadAllHealthRegions = () => {
	// 	API.getAllHealthRegions()
	// 		.then(res => {
	// 			console.log(res.data);
	// 			sethealthRegions(res.data);
	// 		})
	// 		.catch(err => console.log(err));
	// };

	return (
		<>
			<div>
				<h1>{t("COVIDTrendsData")}</h1>
				<form className="form" noValidate autoComplete="off">
					<div>
						<TextField onKeyDown={preventRefresh} onChange={updateFSA} label={t("formalSortationArea")} error={false} helperText={t("inputFirst3PostalCode")} inputProps={{ maxLength: 3 }} />
						<Button
							id="getSingleFSAData"
							variant="contained"
							color="primary"
							disabled={fsa.length !== 3}
							onClick={() => {
								loadCompleteLocationDataForSingleFSA(fsa);
							}}
						>
							{t("getAllLocationDataFSA")}
						</Button>
					</div>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							loadCompleteLocationDataAll();
						}}
					>
						{t("getAllLocationData")}
					</Button>
				</form>
				{fullLocationData.length ? ( //
					<LocationData data={fullLocationData} />
				) : (
					<h3>{t("dataLengthZero")}</h3>
				)}
			</div>
		</>
	);
}

export default DataLoader;
