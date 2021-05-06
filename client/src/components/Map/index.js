import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import "./style.css";

mapboxgl.accessToken = "pk.eyJ1IjoiYWRhbWpzaW0iLCJhIjoiY2tjdWxub3JiMWxmdjJzcGdoZDh0MGY5MSJ9.URHimKC8KY0Alci6jCUHkw";

function Map() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-96.8560163302575);
	const [lat, setLat] = useState(58.9641601681754);
	const [zoom, setZoom] = useState(3);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom
		});
	});

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
}

export default Map;
