const http = require("http")

const url = require("url")
const port = 3000

Servers = function (req, res) {

  let route = url.parse(req.url).routename;
  console.log(route);

  if (route === "/about") {
        res.write("Welcome to about us page");
  } else if (route === "/contact") {
        res.write("Welcome to contact us page");
  } else {
        res.write("Hello World!");
  }
      res.end();
}

server = http.createServer(Servers);

server.listen(port, () => {
  console.log("Server created at port 3000");
});