/* Adam 05/05/2021 | this file allows deeper configuration of CRA via overriding it's scripts, but maintains the ability to update the "react-scripts" library as React updates it

Documentation for CRACO: https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation
*/

const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@pages": path.resolve(__dirname, "src/pages/")
		}
	}
	// jest: {
	//     configure: {
	//         moduleNameMapper: {
	//             "^@components(.*)$": "<rootDir>/src/components$1"
	//         }
	//     }
	// }
};
