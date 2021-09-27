import storageService from './storageService'

const axios = require('axios');

const API_KEY = "N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY"

const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/'

const STORAGE_KEY = 'favs'

var gFavorites = []
var msg = ''

export default {
    cityConverter,
    updateFav,
    queryFav
}

function queryFav() {
    var favCities = storageService.load(STORAGE_KEY)
    gFavorites = favCities
    return gFavorites
}

function cityConverter(cityName) {
    var url = _urlConverter(cityName)
    return axios.get(url)
        .then(res => res.data)
        .catch(err => {
            alert('Can not find this location. Please try another one. ');
            console.log('ERR city service-cityConverter :', err);
        })
}

function updateFav(cityToSave) {
    if (!cityToSave.cityCode) return msg = 'Please enter some location'
    else {
        const cityIdx = _getIdxById(cityToSave.cityCode)
        if (cityIdx >= 0) {
            gFavorites.splice(cityIdx, 1)
            msg = `${cityToSave.city} is successfully removed.`
        }
        else {
            gFavorites.push(cityToSave)
            msg = `${cityToSave.city} was added to favorites!`
        }
    }
    storageService.store(STORAGE_KEY, gFavorites)
    return msg
}

function _getIdxById(cityId) {
    return gFavorites.findIndex(city => city.cityCode === cityId)
}

function _urlConverter(cityName) {
    const newUrl = `${baseUrl}search?apikey=${API_KEY}&q=${cityName}`
    return newUrl
}