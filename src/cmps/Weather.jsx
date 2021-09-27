import React from 'react'

export function Weather({ cityObj }) {
    return (
        <div className="weather-cmp main-layout">
            {cityObj.date && <p>{cityObj.date}</p>}
            {cityObj.description && <p>{cityObj.description}</p>}
            <div className="location-desc">
                <div className="loc-and-temp flex">
                    <div className="flex">
                        {cityObj.isFavorite && <p>💎</p>}
                        {cityObj.city && <span>{cityObj.city} </span>}
                    </div>
                    {cityObj.convertTemp && <p>{cityObj.convertTemp}&deg;{cityObj.convertUnit}</p>}
                </div>
            </div>
        </div>
    )
}