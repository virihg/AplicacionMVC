const datapag2 = require("../Data/datapag2.json");
const url = require("url");
const modelosearch = (request) => {
  //var search = url.parse(request.url, true);
  return datapag2;

}

module.exports = modelosearch;
