import React from "react"

export default function Main(props) {
    return (
            <div className="card">
                <img src={props.imageUrl} className="travel-photo" />
                <div className="travel-info">
                
                    <div className="location">
                        <span className="material-symbols-outlined loc-icon">location_on</span>
                        <p>{props.location}</p>
                        <a href={props.googleMapsUrl}>Veiw on Google Maps</a>
                    </div>
                    
                    <h1>{props.title}</h1>
                    <p className="date">{props.startDate}-{props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
    )
}