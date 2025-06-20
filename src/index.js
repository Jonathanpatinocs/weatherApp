import "./styles.css";

const API_KEY = "WVMWGU5GXHSXYGPYAQLA5BGPR";

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}` , {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .catch(function(err) {
        return err;
        
    });
    return response;
}

 function displayWeather() {
    const location = "Mexico";
    const weather = getWeather(location);
    console.log(weather);
}
displayWeather();
