import React from 'react'
import { Link } from 'react-router-dom'
import utilService from '../services/utilService'

const savedCurrWeather = [
    {
        "DateTime": "2021-09-23T18:00:00+03:00",
        "EpochDateTime": 1632409200,
        "WeatherIcon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false,
        "IsDaylight": true,
        "Temperature": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
        },
        "PrecipitationProbability": 0,
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=18&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=18&lang=en-us"
    }
]

export class FavPreview extends React.Component {

    state = {
        city: '',
        cityCode: '',
        date: utilService.dateConverter(),
        temp: '',
        unit: '',
        convertTemp: '',
        convertUnit: 'C',
        description: '',
        fiveDayForecast: [],
        isFavorite: false
    }

    componentDidMount() {
        this.getWeatherToFavCity()
    }

    getWeatherToFavCity() {
        const { favCity } = this.props
        this.setState({
            city: favCity.city,
            cityCode: favCity.cityCode,
            temp: savedCurrWeather[0].Temperature.Value,
            unit: savedCurrWeather[0].Temperature.Unit,
            convertTemp: utilService.tempConverter(savedCurrWeather[0].Temperature.Value),
            description: savedCurrWeather[0].IconPhrase,
            isFavorite: favCity.isFavorite
        })
    }

    render() {
        return (
            <div className="fav-forecast">
                <div className="fav-loc-name ">
                    <Link to="/">
                        <p>{this.state.city}</p>
                    </Link>
                </div>
                <p>{this.state.convertTemp}&deg;{this.state.convertUnit}</p>
                <p>{this.state.description}</p>
            </div>
        )
    }
}