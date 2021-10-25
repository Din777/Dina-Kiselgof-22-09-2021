const axios = require('axios');

// const API_KEY = "N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY"
const API_KEY = "u58HTB7vLnmoeBywAu3bOtqrhqFVW3Ay"

const baseCurrDayUrl = 'https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/'
const base5DayUrl = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'

export default {
    currWeatherQuery,
    fiveDayForecast
}

function fiveDayForecast(code, setError) {
    var url = _get5DayCorrectUrl(code)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            console.log('ERR weather service- fiveDayForecast:', err);
            return setError('Something went wrong, can not load 5  day forecast for this city.')
        })
}

function currWeatherQuery(code, setError) {
    var url = _getCorrectUrl(code)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            console.log('ERR weather service- currWeatherQuery:', err);
            return setError('Something went wrong, can not load weather for this city.')
        })
}

function _getCorrectUrl(code) {
    const newUrl = `${baseCurrDayUrl}${code}?apikey=${API_KEY}`
    return newUrl
}

function _get5DayCorrectUrl(code) {
    const newUrl = `${base5DayUrl}${code}?apikey=${API_KEY}`
    return newUrl
}