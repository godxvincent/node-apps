const request = require("postman-request");

const url =
    "http://api.weatherstack.com/current?access_key=723bcdee53bf613eecb575d85ae514fe&query=New York";

const url2 =
    "http://api.weatherstack.com/current?access_key=723bcdee53bf613eecb575d85ae514fe&query=Bogota&units=f";

// request(url, function(error, response, body) {
//     console.log("error:", error); // Print the error if one occurred
//     // Print the response status code if a response was received
//     console.log("statusCode:", response && response.statusCode);
//     console.log("body:", body); // Print the HTML for the Google homepage.
// });

request({ url: url2, json: true }, function(error, response, body) {
    // console.log("error:", error); // Print the error if one occurred
    // Print the response status code if a response was received
    // console.log("statusCode:", response && response.statusCode);
    // console.log("body:", body); // Print the HTML for the Google homepage.

    console.log(`[${body.current.weather_descriptions[0]}] :La temperatura actual es ${body.current.temperature} pero se siente una temperatura de ${body.current.feelslike}`);

});