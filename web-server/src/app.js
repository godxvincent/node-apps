const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils.js/geocode");
const forecast = require("./utils.js/forecast");

const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsDirectory = path.join(__dirname, "../templates/partials");
const port = process.env.PORT || 3000;

const app = express();
// Set allows to define different settings for express in this case we are setting hbs as
// view engine.
app.set("view engine", "hbs");
// It is possible to change the views directory trought this configuration
// http://expressjs.com/en/4x/api.html#app.set
app.set("views", viewsDirectory);
hbs.registerPartials(partialsDirectory);
app.use(express.static(publicDirectory));

app.get("", (request, response) => {
  response.render("index", {
    title: "Weather",
    name: "Ricardo Vargas"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ricardo Vargas"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Ricardo Vargas",
    helpText: "This is some helpful text."
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      errorMessage: "An address should be provided"
    });
  }

  geocode.geoCode(address, (error, data) => {
    if (error) {
      return res.send({
        errorMessage: error
      });
    }
    forecast.foreCast(data.longitude, data.latitude, (error2, forecastData) => {
      if (error2) {
        return res.send({
          errorMessage: error2
        });
      }
      console.log(forecastData);
      res.send({
        forecast: forecastData,
        location: data.location,
        address: address
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Help",
    errorMessage: "Help article for " + req.params[0] + " not found",
    name: "Ricardo Vargas"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found",
    name: "Ricardo Vargas"
  });
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
