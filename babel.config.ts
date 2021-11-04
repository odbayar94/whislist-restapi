module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      plugins: ["@babel/transform-runtime"],
    },
  },
  plugins: [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "transform-runtime",
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
      },
    ],
  ],
  loose: true,
};
