import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { WeatherContext } from '../context/weatherContext'
import cityService from '../services/cityService'
import iconService from '../services/iconService'
import utilService from '../services/utilService'
import weatherService from '../services/weatherService'

export const FavPreview = ({ favCity }) => {
    const { getFavCitiesArray } = useContext(WeatherContext)

    const [favCityCurrWeather, setFavCityCurrWeather] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)

    const isFavCity = () => {
        const res = cityService.searchFav(favCity.cityCode)
        console.log('res', res);
        (res) ? setIsFavorite(true) : setIsFavorite(false)
    }

    const editFav = () => {
        cityService.updateFav(favCity.cityCode, favCity.cityName)
        setIsFavorite(!isFavorite)
        getFavCitiesArray()
    }

    const getWeatherToFavCity = async () => {
        const currWeather = await weatherService.currWeatherQuery(favCity.cityCode)
        setFavCityCurrWeather(currWeather[0])
    }

    useEffect(() => {
        getWeatherToFavCity()
        isFavCity()
    }, [])

    return (
        <div className="fav-forecast">
            <div className="fav-loc-name flex">
                <div className="fav-info">
                    <button className="fav-indication-btn" onClick={() => editFav()}>
                        {isFavorite && '♥︎'}
                        {!isFavorite && '♡'}
                    </button>
                </div>
                <div className="fav-info">
                    <Link to="/">
                        <h4>{favCity.cityName}</h4>
                    </Link>
                </div>
            </div>
            {favCityCurrWeather && <h4 className="fav-info">{utilService.tempConverter(favCityCurrWeather.Temperature.Value)}&deg;C</h4>}
            {favCityCurrWeather &&
                <div className="curr-weather-icon fav-info">
                    <img src={iconService.iconQuery(favCityCurrWeather.WeatherIcon)} alt="" />
                </div>}
        </div>
    )
}