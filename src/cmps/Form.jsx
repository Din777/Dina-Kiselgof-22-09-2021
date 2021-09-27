import cityService from '../services/cityService';

export function Form({ cityObj, toggleFav, getWeather }) {

    function editFavorites() {
        var msg = cityService.updateFav(cityObj)
        alert(msg)
        toggleFav(cityObj)
    }

    return (
        < form className="main-layout" action="" onSubmit={getWeather} >
            <input type="text" name="city" placeholder="City..." autoComplete="off" />
            <button>Get Weather</button>
            <button onClick={editFavorites}>
                {cityObj.isFavorite && <span>Remove from favorites</span>}
                {!cityObj.isFavorite && <span>Add to favorites</span>}
            </button>
        </form >)
}