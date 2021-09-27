import { FavPreview } from "./FavPreview"

export function FavList({ favCitiesArray }) {
    return (
        <div className="list-container main-layout">
            <div className="cards-container">
                {favCitiesArray.map(favCity => {
                    return <FavPreview favCity={favCity} key={favCity.cityCode} />
                })}
            </div>
        </div>
    )
}