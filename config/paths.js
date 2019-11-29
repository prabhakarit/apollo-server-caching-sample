const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  appOutputPath: path.resolve(__dirname, "../", "dist"),
  appEntryPath: path.resolve(__dirname,  "../", "app/index.tsx"),
  templatePath: path.resolve(__dirname, "../", "app/public/index.html"),
  imagesFolder: path.resolve(__dirname, "../", "app/public/assets"),
  fontsFolder: path.resolve(__dirname, "../", "app/public/fonts"),
  bffOutputPath: path.resolve(__dirname, "../", "build"),
  bffEntryPath: path.resolve(__dirname,  "../", "beffe/index.ts"),
  nodeModulesPath: path.resolve(__dirname, 'node_modules')
};
