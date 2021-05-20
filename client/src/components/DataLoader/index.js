import React, { useRef, useEffect, useState } from "react";
import API from "@utilities/API";
// import "./style.css";

function DataLoader() {
	const [locations, setLocations] = useState([]);
	const [provinces, setProvinces] = useState([]);
	const [healthRegions, sethealthRegions] = useState([]);

	useEffect(() => {
		loadAllProvinces();
		loadAllHealthRegions();
		loadAllLocations();
	}, []);

	const loadAllLocations = () => {
		API.getAllForwardSortationAreas()
			.then(res => {
				console.log(res.data);
				setLocations(res.data);
			})
			.catch(err => console.log(err));
	};

	const loadAllProvinces = () => {
		API.getAllProvinces()
			.then(res => {
				console.log(res.data);
				setProvinces(res.data);
			})
			.catch(err => console.log(err));
	};

	const loadAllHealthRegions = () => {
		API.getAllHealthRegions()
			.then(res => {
				console.log(res.data);
				sethealthRegions(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			{locations.length ? (
				<ol>
					{locations.map(location => {
						return (
							<li key={location.id}>
								<div>{location.forward_sortation_area}</div>
								<div>{location.hr_uid}</div>
								<div>{location.province_code}</div>
							</li>
						);
					})}
				</ol>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
}

export default DataLoader;
