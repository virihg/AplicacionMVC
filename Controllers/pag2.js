const modelPag2 = require("../Models/modelopag2")
const pag2 = (req) => {
  return JSON.stringify(modelPag2(req));
};
module.exports = pag2;
