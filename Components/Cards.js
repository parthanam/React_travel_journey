import React from "react"

export default function Cards(props)
{
  return(
      <div className="cards">
        <div className="place-img">
            <img src={props.item.imageUrl}></img>
        </div>
        
        <div className="card--content">
            <div className="card--location">
                <img src="../icons/placeholder.png" className="location--img"></img>
                <h4 className="location--name">{props.item.location}</h4>
                <a  href={props.item.googleMapsUrl} className="location--link">View on Google Maps</a>
            </div>
            <div className="card--details">
                <h1 className="title">{props.item.title}</h1>
                <h3 className="date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="description">{props.item.description}</p>
            </div> 
        </div>
      </div>
  )   
}