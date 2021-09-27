import { ForecastPreview } from './ForecastPreview'

export function ForecastsList({ fiveDayForecast }) {
    return (
        <div className="list-container main-layout">
            <div className="cards-container">
                {fiveDayForecast.map(day => {
                    return <ForecastPreview key={day.Date} day={day} />
                })}
            </div>
        </div>
    )
}