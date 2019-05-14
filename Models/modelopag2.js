const datapag2 = require("../Data/datapag2.json");
const url = require("url");
const modelpag2 = (request) => {
  //var nombre = datapag2[].Nombre;
  //var apellido_paterno = datapag2[].Apellido_paterno;
  //var apellido_materno = datapag2[].Apellido_materno;
  //var edad = datapag2[].Edad;
  var registro = url.parse(request.url, true);
    if (registro.query.func == "alta") {
      var nuevoRegistro = {Nombre:registro.query.nom,
                          Apellido_paterno:registro.query.appat,
                          Apellido_materno:registro.query.apmat,
                          Edad:registro.query.ed };
      datapag2.push(nuevoRegistro);
    } return datapag2;
      console.log(nuevoRegistro);
    }
  module.exports = modelpag2;
