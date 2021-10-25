import storageService from './storageService'

const axios = require('axios');

// const API_KEY = "N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY"
const API_KEY = "u58HTB7vLnmoeBywAu3bOtqrhqFVW3Ay"

const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/'

const STORAGE_KEY = 'favs'

var gFavorites = []

export default {
    cityConverter,
    updateFav,
    searchFav,
    queryFav
}

function queryFav() {
    var favCities = storageService.load(STORAGE_KEY)
    if (favCities) gFavorites = favCities
    return gFavorites
}

function cityConverter(cityName, setError) {
    var url = _urlConverter(cityName)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            console.log('ERR city service-cityConverter :', err);
            return setError('Can not find this location. Please try another one.');
        })
}

function searchFav(cityCode) {
    const cityIdx = _getIdxById(cityCode)
    if (cityIdx >= 0) return true
    else return false
}

function updateFav(cityCode, cityName, setError) {
    if (!cityCode || !cityName) return setError('City is empty- can not add to favorite.')

    const cityIdx = _getIdxById(cityCode)
    if (cityIdx >= 0) {
        gFavorites.splice(cityIdx, 1)
    }
    else {
        gFavorites.push({ cityCode, cityName })
    }
    storageService.store(STORAGE_KEY, gFavorites)
}

function _getIdxById(cityId) {
    return gFavorites.findIndex(code => code.cityCode === cityId)
}

function _urlConverter(cityName) {
    const newUrl = `${baseUrl}search?apikey=${API_KEY}&q=${cityName}`
    return newUrl
}