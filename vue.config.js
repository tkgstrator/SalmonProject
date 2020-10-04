module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/SalmonProject/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}