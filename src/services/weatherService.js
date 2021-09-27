const axios = require('axios');

const API_KEY = "N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY"

const baseCurrDayUrl = 'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/'
const base5DayUrl= 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'

export default {
    currWeatherQuery,
    fiveDayForecast
}

function fiveDayForecast(code) {
    var url = _get5DayCorrectUrl(code)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            alert('OOPs, try again');
            console.log('ERR weather service- fiveDayForecast:', err);
        })
}

function currWeatherQuery(code) {
    var url = _getCorrectUrl(code)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            alert('OOPs, try again');
            console.log('ERR weather service- currWeatherQuery:', err);
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