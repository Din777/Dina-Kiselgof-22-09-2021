import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../context/weatherContext';
import cityService from '../services/cityService';
import iconService from '../services/iconService'
import utilService from '../services/utilService';

export const Weather = () => {
    const { weatherState, city, cityCode, setError }= useContext(WeatherContext)

    const [isFavorite, setIsFavorite] = useState(false)

    const isFavCity = () => {
        const res = cityService.searchFav(cityCode)
        console.log('res', res);
        (res) ? setIsFavorite(true) : setIsFavorite(false)
    }

    const editFav = () => {
        cityService.updateFav(cityCode, city, setError)
        setIsFavorite(!isFavorite)
    }

    useEffect(() => {
        isFavCity()
    }, [cityCode])

    return (
        < div className="weather-cmp main-layout">
            <div className="flex space-between">
                {weatherState.DateTime &&
                    <span>{utilService.dateConverter(weatherState.DateTime)}</span>}
                <button className="fav-indication-btn" onClick={() => editFav()}>
                    {isFavorite && '♥︎'}
                    {!isFavorite && '♡'}
                </button>
            </div>
            <div className="location-desc">
                <div className="loc-and-temp flex">
                    <div className="flex">
                        {city && <span>{city} </span>}
                    </div>
                    {weatherState.Temperature.Value &&
                        <p>{utilService.tempConverter(weatherState.Temperature.Value)}&deg;C</p>}
                    <div className="curr-weather-icon">
                        <img src={iconService.iconQuery(weatherState.WeatherIcon)} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}