import { useContext } from 'react'
import { WeatherContext } from '../context/weatherContext'
import { FavPreview } from './FavPreview'

export const FavList = () => {
    const { favCities } = useContext(WeatherContext)

    return (
        <div className="list-container main-layout">
            <div className="cards-container">
                {favCities.map(favCity => {
                    return <FavPreview key={favCity.cityCode} favCity={favCity} />
                })}
            </div>
        </div>
    )
}