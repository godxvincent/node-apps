const request = require("postman-request");

const foreCast = (longitude, latitude, callback) => {
  const weatherURL = "http://api.weatherstack.com/current";
  const queryString = {
    access_key: "723bcdee53bf613eecb575d85ae514fe",
    query: `${latitude},${longitude}`,
    units: "m"
  };

  request(
    { url: weatherURL, json: true, qs: queryString },
    (error, response, body) => {
      if (error) {
        callback("Incapaz de conectarse con el servicio de weatherstack.com");
      } else if (body.error) {
        callback(
          `Incapaz de predecir el clima del sitio solicitado, intente otro sitio. Más información ${body.error.info}`
        );
      } else {
        const data = {
          descripcion_clima: body.current.weather_descriptions[0],
          temperatura: body.current.temperature,
          sensacion: body.current.feelslike
        };

        callback(null, data);
      }
    }
  );
};

module.exports = {
  foreCast
};
