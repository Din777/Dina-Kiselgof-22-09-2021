import React, { useEffect, useState } from "react"
import { FavList } from "../cmps/FavList"
import { WeatherContext } from "../context/weatherContext"
import cityService from "../services/cityService"

export const Fav = () => {

    const [favCities, setFavCities] = useState([])

    const getFavCitiesArray = async () => {
        const favCities = await cityService.queryFav()
        setFavCities(favCities)
    }

    useEffect(() => {
        getFavCitiesArray()
    }, [])

    return <WeatherContext.Provider value={{ favCities, getFavCitiesArray }}>
        <div className="fav-container main-container flex column align-center ">
            <div className="main-layout">
                <h3>My favorites locations:</h3>
            </div>
            {favCities[0] && <FavList />}
            {!favCities[0] && <div className="fav-page-msg main-layout">
                <p>Your list is empty</p>
                <div className="list-container"></div>
            </div>}
        </div>
    </WeatherContext.Provider>
}