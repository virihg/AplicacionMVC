const Pag1 = require("../Controllers/pag1");
const Pag2 = require("../Controllers/pag2");
const Search = require("../Controllers/search");

const router = (request, response) =>{
    if(request.url === "/pag1"){
      var result = Pag1(request);
      response.end(result);
    } else if (request.url === "/search") {
      var search = Search(request);
      response.end(search);
    }
    else {
      var newadd = Pag2(request);
      response.end(newadd);
    }
  };

module.exports = router;
