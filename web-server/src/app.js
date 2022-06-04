const path = require("path");
const express = require("express");

const publicDirectory = path.join(__dirname, "../public");

const app = express();
// Set allows to define different settings for express in this case we are setting hbs as
// view engine.
app.set("view engine", "hbs");
app.use(express.static(publicDirectory));

// app.get("/weather", (request, response) => {
//   response.send("weather Page");
// });

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
