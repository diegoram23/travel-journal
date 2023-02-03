import React from 'react'
import mapIcon from './images/map-icon.svg'


export default function Section(props) {

    return (
        <div className='section--container'>
            <img className='section--img' src={props.item.imageUrl} />
            <div className='section--text-container'>
                <div className='section--info'>
                    <img className='section--icon' alt={props.item.alt} src={mapIcon} />
                    <h5 className='section--location'>{props.item.location}</h5>
                    <a href={props.item.googleMapsUrl} className='section--google-link'>View on Google Maps</a>
                </div>
                <h2 className='section--title'>{props.item.title}</h2>
                <h4 className='section--dates'>{props.item.startDate}-{props.item.endDate}</h4>
                <p className='section--description'>{props.item.description}</p>
            </div>
        </div>
    )
}