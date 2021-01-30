const jsonServer = require("json-server");
const db = require("./db");
const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  // Add a Created/Modified Dates to Added/Updated Items
  if (req.method === "POST") {
    req.body.Created = new Date().toISOString();
    req.body.Modified = req.body.Created;
  }
  if (req.method === "PATCH") {
    req.body.Modified = new Date().toISOString();
  }

  // Continue to JSON Server router
  next();
});

server.use("/api", router); // Routes server
server.listen(3000, () => {
  console.log("JSON Server is running");
});
