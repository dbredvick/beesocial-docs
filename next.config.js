const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  defaultMenuCollapsed: false,
  unstable_staticImage: true, // to enable Nextra's auto image import
  floatTOC: false,
});
module.exports = withNextra({
  reactStrictMode: true,
});
