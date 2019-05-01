console.log(process.env);
const developConfig = {
  name: "'develop'",
  baseUrl: "'www.develop.com'"
};
const productConfig = {
  name: "'product'",
  baseUrl: "'www.product.com'"
};
let config__ =
  process.env.NODE_ENV === "production" ? productConfig : developConfig;
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0].API_CONFIG = JSON.stringify(config__);
      return args;
    });
  }
};
