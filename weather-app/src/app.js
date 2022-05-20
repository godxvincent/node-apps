const geocode = require("./utils.js/geocode");
const forecast = require("./utils.js/forecast");

if (process.argv.length > 2) {
  const place = process.argv[2];
  geocode.geoCode(place, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    forecast.foreCast(data.longitude, data.latitude, (error2, forecastData) => {
      if (error2) {
        console.log(error2);
        return;
      }
      const message = `[${forecastData.descripcion_clima}] :
              La temperatura actual es ${forecastData.temperatura} 
              pero se siente una temperatura de ${forecastData.sensacion}`;
      console.log(data.location);
      console.log(message);
    });
  });
} else {
  console.log(
    "Debe ingresar un lugar como primer argumento 'node app.js bogota'"
  );
}
