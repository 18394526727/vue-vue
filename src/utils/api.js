import axios from "axios";
import Vue from "vue";
const baseURL = "http://localhost:3000";
const methods = ["get", "post", "put", "delete"];
let http = {};
for (let method = 0; method < methods.length; method++) {
  const item = methods[method];
  http[item] = (url, queryData) =>
    new Promise((resolve, reject) => {
      axios({
        method: item,
        url: url,
        params: item === "get" ? queryData : null,
        data: item === "get" ? null : queryData,
        baseURL: baseURL
        // headers: headers
      })
        .then(res => {
          resolve(res);
        })
        .catch(res => {
          reject(res);
        });
    });
}
Vue.prototype.$http = http;
