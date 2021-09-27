import React from "react"
import { FavList } from "../cmps/FavList"
import cityService from "../services/cityService"

export class Fav extends React.Component {

    state = {
        favCities: []
    }

    componentDidMount() {
        this.getFavCitiesArray()
    }

    getFavCitiesArray = async () => {
        var favCityArray = await cityService.queryFav()
        this.setState({
            favCities: favCityArray
        })
    }

    render() {
        return <div className="fav-container main-container flex column align-center ">
            <div className="main-layout">
                <h3>My favorites locations:</h3>
            </div>
            {(this.state.favCities) && <FavList favCitiesArray={this.state.favCities} />}
            {(!this.state.favCities) && <div className="fav-page-msg main-layout">
                <p>Your list is empty</p>
                <div className="list-container"></div>
            </div>}
        </div>
    }
}