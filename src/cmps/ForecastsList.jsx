import { useContext } from 'react'
import { WeatherContext } from '../context/weatherContext'
import { ForecastPreview } from './ForecastPreview'

export const ForecastsList = () => {
    const { fiveDayForecast } = useContext(WeatherContext)

    return (
        <div className="list-container main-layout">
            <div className="cards-container">
                {fiveDayForecast.map(day => {
                    return <ForecastPreview key={day.EpochDate} day={day} />
                })}
            </div>
        </div>
    )
}