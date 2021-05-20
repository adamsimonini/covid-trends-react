/* Adam 05/05/2021 | this file allows deeper configuration of CRA via extending it's scripts, but maintains the ability to update the "react-scripts" library as React updates it

Documentation for CRACO: https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation
*/
const { ESLINT_MODES } = require("@craco/craco");
const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@utilities": path.resolve(__dirname, "src/utils/")
		}
	},
	eslint: {
		enable: true /* (default value) */,
		mode: "extends" /* (default value) */ || "file",
		configure: {
			/* Any eslint configuration options: https://eslint.org/docs/user-guide/configuring */
		},
		configure: (eslintConfig, { env, paths }) => {
			return eslintConfig;
		},
		pluginOptions: {
			/* Any eslint plugin configuration options: https://github.com/webpack-contrib/eslint-webpack-plugin#options. */
		},
		pluginOptions: (eslintOptions, { env, paths }) => {
			return eslintOptions;
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
