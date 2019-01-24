const path = require("path");
const {
  override,
  fixBabelImports,
  addLessLoader,
	addWebpackAlias
} = require("customize-cra");


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#4fd498" }
  }),
	addWebpackAlias({
    ["src"]: path.resolve(__dirname, "src"),
    ["api"]: path.resolve(__dirname, "src/api"),
    ["components"]: path.resolve(__dirname, "src/components"),
    ["containers"]: path.resolve(__dirname, "src/containers"),
    ["statics"]: path.resolve(__dirname, "src/statics"),
    ["store"]: path.resolve(__dirname, "src/store")
  })
);