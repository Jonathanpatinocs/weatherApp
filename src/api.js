const API_KEY = "WVMWGU5GXHSXYGPYAQLA5BGPR";

async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}` , {mode: 'cors'})
        const data = await response.json();
        return data
    }
    catch {
        console.log("this is error");
    }
}

 async function displayWeather() {
    const location = "Mexico";
    const weather = await getWeather(location);
    console.log(weather);
}


export {displayWeather};