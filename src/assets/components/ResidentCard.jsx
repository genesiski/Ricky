import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./styles/ResidenstCard.css"
const ResidentCard = ({ residentUrl }) => {

  const [residentInfo, setResidentInfo] = useState()

  console.log(residentUrl);
  useEffect(() => {

    axios.get(residentUrl)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <article className='residentCard'>
      <div className='residentCard__img'>
        <img src={residentInfo?.image} alt="" />
      </div>
      <div className='residentCard__status'>
        <div className={`residentCard__status__circle ${residentInfo?.status}`}></div>
        <h4 className='residentCard__status__name'>{residentInfo?.status} </h4>
      </div>
      <section className='residentCard__info'>
        <h3 className='residentCard__name'>{residentInfo?.name} </h3>
        <hr className='residenteCard__line' />
        <ul className='residentCard__list'>
          <li className='residentCard__item'><span>Specie: </span>{residentInfo?.species} </li>
          <li className='residentCard__item'><span>Origin: </span>{residentInfo?.origin.name} </li>
          <li className='residentCard__item'>Episodes where appears: <span>{residentInfo?.episode.length} </span></li>
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard