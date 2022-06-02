const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cancy-project",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
    standaloneOptions: {
      appOrParcelName: "ticket",
      importMapUrl: new URL("https://storage.googleapis.com/cancy-website-bucket/import/map.json"),
      // importMap: {
      //   imports: {
      //     // "@emotion/react": "https://cdn.jsdelivr.net/npm/@emotion/react@11.9.0/dist/emotion-react.browser.cjs.min.js",
      //     // "@emotion/styled": "https://cdn.jsdelivr.net/npm/@emotion/styled@11.8.1/dist/emotion-styled.browser.cjs.min.js",
      //     // "@mui/lab": "https://unpkg.com/@mui/lab@5.0.0-alpha.84/node/index.js",
      //     // "@mui/material": "https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js",
      //   }
      // },
    },
  });

  return merge(defaultConfig, {
    // externals: [
    //   "react",
    //   "react-dom",
    //   "single-spa", /^@cancy-project\//, /^@mui\//,
    // ],
    // modify the webpack config however you'd like to by adding to this object
  });
};
