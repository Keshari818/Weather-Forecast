const  baseURL = "http://api.weatherapi.com/v1/current.json?key=a4bb62e2e4304a95916221601242006"
export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};