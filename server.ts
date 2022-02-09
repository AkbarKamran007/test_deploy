import http = require("http");

import App from "./app";

const apps = new App().app;
var httpServer = http.createServer(apps);

const start = () => {
  httpServer.listen(3000, () => {
    console.log(
      "Server is running:  http://localhost:8080/api/sticker",
      "Param:keyword = cute"
    );
  });
};
start();
