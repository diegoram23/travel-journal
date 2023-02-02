import React from "react"
import logo from './images/globe-logo.svg'

export default function Nav(){
    return (
        <div className="nav--container">
           <img src={logo} className='nav--logo' />
           <h5 className="nav--title">my travel journal</h5>
        </div>
    )
}