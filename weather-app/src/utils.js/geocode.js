const request = require("postman-request");

const geoCode = (address, callback) => {
  const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const token = ".json";
  const geoCodeURL = `${baseUrl}${encodeURIComponent(address)}${token}`;
  //   &limit=1
  const queryString = {
    access_token:
      "pk.eyJ1IjoiZ29keHZpbmNlbnQiLCJhIjoiY2tzZXpzNnB3MTV3OTJ2bnZxazR4eXN1aSJ9.ui9t9LxnDxjk2fLN2m48uw",
    limit: 1
  };

  request(
    { url: geoCodeURL, json: true, qs: queryString },
    (error, response, body) => {
      if (error) {
        callback("Incapaz de conectarse con el servicio de mapbox-geocoding");
      } else if (response.body.features.length === 0) {
        callback(
          "Incapaz de encontrar la ubicación solicitada, intente otro sitio."
        );
      } else {
        const data = {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        };
        callback(null, data);
      }
    }
  );
};

module.exports = {
  geoCode
};
