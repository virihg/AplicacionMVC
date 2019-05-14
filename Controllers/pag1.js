// un controlador controla que modulos utiliza cada elemento o función principal de la app
const modelPag1 = require("../Models/modelopag1")
const pag1 = (req) => {
  return JSON.stringify(modelPag1());
};
module.exports = pag1;
