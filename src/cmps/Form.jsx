import React, { useContext } from "react"
import { WeatherContext } from "../context/weatherContext"

export const Form = () => {
    const { getWeather } = useContext(WeatherContext)

    return (
        < form className="main-layout" action="" onSubmit={getWeather} >
            <input type="text" name="city" placeholder="City..." autoComplete="off" />
            <button>Get Weather</button>
        </form >)
}