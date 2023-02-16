import React from 'react'
import "./styles/LocationInfo.css"
const LocationInfo = ({ location }) => {
  return (
    <section className='Info'>
      <ul className='Location__Info' >
        <li><span>Name:</span>{location?.name}</li>
        <li><span>Type:</span> {location?.type} </li>
        <li><span>Dimension:</span> {location?.dimension} </li>
        <li><span>Population:</span> {location?.residents.length} </li>

      </ul>
    </section>
  )
}

export default LocationInfo