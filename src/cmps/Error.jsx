import React, { useContext } from 'react'
import { WeatherContext } from '../context/weatherContext'

export const Error = () => {
    const { errorMsg } = useContext(WeatherContext)

    return <div className="error main-layout"><span>{errorMsg}</span></div>
}