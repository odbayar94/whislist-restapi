import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,

  transformIgnorePatterns: ["node_modules/(?!node-sass)/"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Report Unit test",
      },
    ],
  ],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
};
export default config;
