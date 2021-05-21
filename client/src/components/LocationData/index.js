import React from "react";
import "./style.css";

function LocationData({ data }) {
	return (
		<>
			{data.map(location => {
				return (
					<div className="location" key={location.id}>
						<h2>{location.forward_sortation_area}</h2>
						<h4>Location Data</h4>
						<ul>
							<li>Forward Sortation Area: location.forward_sortation_area</li>
							<li>Health Region ID: {location.hr_uid}</li>
							<li>Province Code: {location.province_code}</li>
							<li>Health Region Name English: {location.HealthRegion.name_en}</li>
							<li>Health Region Name French: {location.HealthRegion.name_fr}</li>
							<li>
								<a href={location.HealthRegion.website_en}>Health Region Website English</a>
							</li>
							<li>
								<a href={location.HealthRegion.website_fr}>Health Region Website French</a>
							</li>
							<li>Province Name: {location.HealthRegion.Province.full_name}</li>
							<li>Province Code: {location.HealthRegion.Province.province_code}</li>
							<li>Province Alpha Code: {location.HealthRegion.Province.alpha_code}</li>
							<li>Province Region: {location.HealthRegion.Province.region}</li>
						</ul>
					</div>
				);
			})}
		</>
	);
}

export default LocationData;
