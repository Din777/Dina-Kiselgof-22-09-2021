import React from 'react'
import { ForecastsList } from '../cmps/ForecastsList'
import { Form } from '../cmps/Form'
import { Weather } from '../cmps/Weather'
import weatherService from '../services/weatherService'
import cityService from '../services/cityService'
import utilService from '../services/utilService'


export class Home extends React.Component {

    state = {
        city: 'Tel Aviv',
        cityCode: 215854,
        date: utilService.dateConverter(),
        temp: '',
        unit: '',
        convertTemp: '',
        convertUnit: 'C',
        description: '',
        fiveDayForecast: [],
        isFavorite: ''
    }

    componentDidMount() {
        this.getCurrForecast()
        this.getFiveDaysForecast()
    }

    getCurrForecast = async () => {
        const currWeather = await weatherService.currWeatherQuery(this.state.cityCode)
        this.setState({
            temp: currWeather[0].Temperature.Value,
            unit: currWeather[0].Temperature.Unit,
            convertTemp: utilService.tempConverter(currWeather[0].Temperature.Value),
            description: currWeather[0].IconPhrase,
        })
    }

    getFiveDaysForecast = async () => {
        const fiveDaysWeather = await weatherService.fiveDayForecast(this.state.cityCode)
        this.setState({
            fiveDayForecast: fiveDaysWeather.DailyForecasts
        })
    }

    getWeather = async (ev) => {
        ev.preventDefault()
        var cityForSearch
        (!ev.target.elements.city.value) ? cityForSearch = this.state.city : cityForSearch = ev.target.elements.city.value
        var convertCityName = utilService.nameConverter(cityForSearch)
        const cityCode = await cityService.cityConverter(convertCityName)
        this.setState({
            city: convertCityName,
            cityCode: cityCode[0].Key,
        })
        this.getCurrForecast()
        this.getFiveDaysForecast()
    }

    onToggleFav = () => {
        if (this.state.isFavorite) {
            this.setState({
                isFavorite: false
            })
        } else {
            this.setState({
                isFavorite: true
            })
        }
    }

    render() {
        return (
            <div className="main-container flex column align-center">
                <Form getWeather={this.getWeather} spellCheck={this.spellCheck} cityObj={this.state} toggleFav={this.onToggleFav} />
                <Weather cityObj={this.state} />
                {this.state.fiveDayForecast && <ForecastsList fiveDayForecast={this.state.fiveDayForecast} />}
            </div>
        )
    }
}