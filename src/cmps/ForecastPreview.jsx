import React from 'react'
import utilService from '../services/utilService'

export class ForecastPreview extends React.Component {

    getConvertTemp(temp) {
        var newTemp = utilService.tempConverter(temp)
        return newTemp
    }

    getConvertDate(date) {
        var convertDate = utilService.weeklyDaysConverter(date)
        return convertDate
    }

    render() {
        const { day } = this.props
        return (
            <div className="forecast">
                <div className="info"><p>{this.getConvertDate(day.Date)}</p></div>
                <div className="info"><p>Max: {this.getConvertTemp(day.Temperature.Maximum.Value)}&deg;C</p></div>
                <div className="info">  <p>Min: {this.getConvertTemp(day.Temperature.Minimum.Value)}&deg;C</p></div>
                <div className="info"><p>{day.Day.IconPhrase}</p></div>
            </div>
        )
    }
}