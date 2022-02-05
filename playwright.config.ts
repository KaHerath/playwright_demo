import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
	use: {
		baseURL: "https://www.saucedemo.com",
		headless: false,
		screenshot: "only-on-failure",
		video: "off",
		trace: "off",
		//channel: "chrome",
	},
	outputDir: "./Reports/screenshots",
	// retries: 1,
	reporter: [
		[
			"html",
			{
				open: "on-failure",
				outputFolder: `./Reports/${Date.now()}_TestResult`,
			},
		],
		["list", { outputFile: "./Reports/test-results.txt" }],
	],
};
export default config;
