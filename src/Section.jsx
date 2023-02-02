import React from 'react'
import mapIcon from './images/map-icon.svg'
import fuji from './images/fuji.svg'
export default function Section(props) {

    return (
        <div className='section--container'>
            <img className='section--img' src={fuji} />
            <div className='second-container'>
                <div className='section--info'>
                    <img className='section--icon' src={mapIcon} />
                    <h5 className='section--location'>{props.location}</h5>
                    <p className='section--google-link'>View on Google Maps</p>
                </div>
                <h2 className='section--title'>{props.title}</h2>
                <h4 className='section--dates'>{props.startDate}-{props.endDate}</h4>
                <p className='section--description'>{props.description}</p>
            </div>
        </div>
    )
}