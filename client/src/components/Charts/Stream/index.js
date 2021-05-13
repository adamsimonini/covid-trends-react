// import { patternDotsDef, patternSquaresDef } from "@nivo/core";
import { ResponsiveStream } from "@nivo/stream";
import React from "react";

function StreamChart() {
	const data = [
		{
			Raoul: 108,
			Josiane: 120,
			Marcel: 24,
			René: 153,
			Paul: 70,
			Jacques: 159
		},
		{
			Raoul: 101,
			Josiane: 197,
			Marcel: 120,
			René: 165,
			Paul: 176,
			Jacques: 65
		},
		{
			Raoul: 165,
			Josiane: 29,
			Marcel: 199,
			René: 95,
			Paul: 160,
			Jacques: 162
		},
		{
			Raoul: 105,
			Josiane: 18,
			Marcel: 16,
			René: 36,
			Paul: 108,
			Jacques: 170
		},
		{
			Raoul: 63,
			Josiane: 49,
			Marcel: 56,
			René: 188,
			Paul: 13,
			Jacques: 193
		},
		{
			Raoul: 142,
			Josiane: 21,
			Marcel: 125,
			René: 181,
			Paul: 36,
			Jacques: 36
		},
		{
			Raoul: 191,
			Josiane: 123,
			Marcel: 163,
			René: 91,
			Paul: 172,
			Jacques: 15
		},
		{
			Raoul: 158,
			Josiane: 161,
			Marcel: 163,
			René: 171,
			Paul: 45,
			Jacques: 128
		},
		{
			Raoul: 155,
			Josiane: 57,
			Marcel: 16,
			René: 24,
			Paul: 25,
			Jacques: 108
		}
	];
	return (
		<>
			<h2>Stream</h2>
			<ResponsiveStream
				data={data}
				keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: "bottom",
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "",
					legendOffset: 36
				}}
				axisLeft={{ orient: "left", tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "", legendOffset: -40 }}
				offsetType="silhouette"
				colors={{ scheme: "nivo" }}
				fillOpacity={0.85}
				borderColor={{ theme: "background" }}
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "#2c998f",
						size: 4,
						padding: 2,
						stagger: true
					},
					{
						id: "squares",
						type: "patternSquares",
						background: "inherit",
						color: "#e4c912",
						size: 6,
						padding: 2,
						stagger: true
					}
				]}
				fill={[
					{
						match: {
							id: "Paul"
						},
						id: "dots"
					},
					{
						match: {
							id: "Marcel"
						},
						id: "squares"
					}
				]}
				dotSize={8}
				dotColor={{ from: "color" }}
				dotBorderWidth={2}
				dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
				legends={[
					{
						anchor: "bottom-right",
						direction: "column",
						translateX: 100,
						itemWidth: 80,
						itemHeight: 20,
						itemTextColor: "#999999",
						symbolSize: 12,
						symbolShape: "circle",
						effects: [
							{
								on: "hover",
								style: {
									itemTextColor: "#000000"
								}
							}
						]
					}
				]}
			/>
		</>
	);
}

export default StreamChart;
