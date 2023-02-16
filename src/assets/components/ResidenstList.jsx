import React from 'react'
import ResidentCard from './ResidentCard'
import "./styles/ResidensList.css"
const ResidenstList = ({ pagination }) => {
  return (
    <section className='residentsList'>
      {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
      }
    </section>
  )
}

export default ResidenstList