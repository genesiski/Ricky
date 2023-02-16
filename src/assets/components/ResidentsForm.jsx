import React from 'react'
import "./styles/Form.css"

const ResidentsForm = ({ handleSubmit }) => {
  return (
    <section className='Content__Form' >
      <form className='Form' onSubmit={handleSubmit}>
        <input className='input' type="text" id='idlocation' placeholder='type a location id' />
        <button className='button'>Search</button>
      </form>
    </section>
  )
}

export default ResidentsForm