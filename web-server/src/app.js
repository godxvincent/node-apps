const path = require("path");
const express = require("express");

const publicDirectory = path.join(__dirname, "../public");

const app = express();
app.use(express.static(publicDirectory));

// app.get("/weather", (request, response) => {
//   response.send("weather Page");
// });

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
