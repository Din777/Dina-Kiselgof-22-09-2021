import React from 'react'
import iconService from '../services/iconService'
import utilService from '../services/utilService'

export const ForecastPreview = ({ day }) => {
    return (
        <div className="forecast">
            <div className="info"><p>{utilService.weeklyDaysConverter(day.Date)}</p></div>
            <div className="info"><p>Max: {utilService.tempConverter(day.Temperature.Maximum.Value)}&deg;C</p></div>
            <div className="info"><p>Min: {utilService.tempConverter(day.Temperature.Minimum.Value)}&deg;C</p></div>
            <div className="info"><img src={iconService.iconQuery(day.Day.Icon)} alt="" /></div>
        </div>
    )
}