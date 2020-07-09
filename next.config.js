const path = require("path");

// next.config.js
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "pages/components"
    );

    return config;
  },
});
