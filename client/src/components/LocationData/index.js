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
							<li>
								<b>Health Region ID:</b> {location.hr_uid}
							</li>
							<li>
								<b>Province Code:</b> {location.province_code}
							</li>
							<li>
								<b>Health Region Name English:</b> {location.HealthRegion.name_en}
							</li>
							<li>
								<b>Health Region Name French:</b> {location.HealthRegion.name_fr}
							</li>
							<li>
								<a href={location.HealthRegion.website_en}>Health Region Website English</a>
							</li>
							<li>
								<a href={location.HealthRegion.website_fr}>Health Region Website French</a>
							</li>
							<li>
								<b>Province Name:</b> {location.HealthRegion.Province.full_name}
							</li>
							<li>
								<b>Province Code:</b> {location.HealthRegion.Province.province_code}
							</li>
							<li>
								<b>Province Alpha Code:</b> {location.HealthRegion.Province.alpha_code}
							</li>
							<li>
								<b>Province Region:</b> {location.HealthRegion.Province.region}
							</li>
						</ul>
					</div>
				);
			})}
		</>
	);
}

export default LocationData;
