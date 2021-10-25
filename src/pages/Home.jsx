import React, { useEffect, useState } from 'react'
import { ForecastsList } from '../cmps/ForecastsList'
import { Form } from '../cmps/Form'
import { Weather } from '../cmps/Weather'
import { Error } from '../cmps/Error'
import weatherService from '../services/weatherService'
import cityService from '../services/cityService'
import { WeatherContext } from '../context/weatherContext'


export const Home = () => {
    const [weatherState, setWeatherState] = useState(null)
    const [fiveDayForecast, setFiveDayForecast] = useState([])
    const [city, setCity] = useState('Tel Aviv')
    const [cityCode, setCityCode] = useState(215854)
    const [error, setError] = useState(null)

    const getCurrForecast = async () => {
        const currWeather = await weatherService.currWeatherQuery(cityCode, setError)
        return currWeather[0]
    }

    const getFiveDaysForecast = async () => {
        const fiveDaysWeather = await weatherService.fiveDayForecast(cityCode, setError)
        return fiveDaysWeather.DailyForecasts
    }

    const getWeather = async (ev) => {
        ev.preventDefault()
        setWeatherState(null)
        setFiveDayForecast(null)
        setCityCode(null)
        const cityForSearch = ev.target.elements.city.value
        if (!cityForSearch) return setError('Please enter the name of the city.')

        const cityCode = await cityService.cityConverter(cityForSearch, setError)
        if (!cityCode[0]) return setError('Location is not found. Please try a different name.')

        setCityCode(cityCode[0].Key)
        setCity(cityCode[0].LocalizedName)
    }

    const onLoad = async () => {
        const weather = await getCurrForecast()
        setWeatherState(weather)
        const forecast = await getFiveDaysForecast()
        setFiveDayForecast(forecast)
        setError(null)
    }

    useEffect(() => {
        if (cityCode) onLoad()
        return () => (
            setWeatherState(null),
            setFiveDayForecast([])
        )
    }, [cityCode])

    return (
        <WeatherContext.Provider value={{ getWeather, error, weatherState, city, cityCode, setWeatherState, fiveDayForecast }}>
            <div className="main-container flex column align-center">
                <Form />
                {error && <Error />}
                {weatherState && <Weather />}
                {fiveDayForecast && <ForecastsList />}
            </div>
        </WeatherContext.Provider>
    )
}