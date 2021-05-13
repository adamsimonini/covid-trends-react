import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "./style.css";

mapboxgl.accessToken = "pk.eyJ1IjoiYWRhbWpzaW0iLCJhIjoiY2tjdWxub3JiMWxmdjJzcGdoZDh0MGY5MSJ9.URHimKC8KY0Alci6jCUHkw";

function Map() {

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		});
	});

	return (
		<div>
		</div>
	);
}

export default Map;
