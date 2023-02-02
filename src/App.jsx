import React from 'react'
import Nav from './Nav'
import Section from './Section'
import data from './data.jsx'

function App() {

  return (
    <div>
        <Nav />
        <Section 
         title = "Mount Fuji"
         location = "Japan"
         googleMapsUrl = "https://goo.gl/maps/1DGM5WrWnATgkSNB8"
         startDate = "12 Jan, 2021"
         endDate = "24 Jan, 2021"
         description = "The tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
         imageUrl = "./images/fuji.svg"
         />
         <hr />
    </div>
  )
}

export default App
