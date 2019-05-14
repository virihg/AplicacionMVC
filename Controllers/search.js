const modelosearch = require("../Models/modelosearch")
const fs = require("fs");
const path = require("path");
var appDir = path.dirname(require.main.filename);

const search = (req) => {
  var termino = "Maria";
  var data = modelosearch();
  //console.log(data);
      data = data.filter((alumno) =>{
    if (alumno.Nombre === termino){
      return alumno;
    }
  });
  let route = path.join("/Views","view1.html")
  const view = fs.readFileSync(appDir + route).toString('utf8');
  //const parsedHtml = htmlRender(view, result[0]);

  return(view);
};
module.exports = search;

const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

    for(key in data){
        let exp = "{{"+key+"}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }

    return parsedHtml;
};
