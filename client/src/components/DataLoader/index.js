import React, { useRef, useEffect, useState } from "react";
import LocationData from "@components/LocationData";
import API from "@utilities/API";
import "./style.css";

function DataLoader() {
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
		API.getCompleteLocationDataAll().then(res => {
			console.log(res.data);
			setFullLocationData(res.data);
		});
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
				<h1>COVIDTrends Data</h1>
				{fullLocationData.length ? ( //
					<LocationData data={fullLocationData} />
				) : (
					<h3>Loading...</h3>
				)}
			</div>
		</>
	);
}

export default DataLoader;
