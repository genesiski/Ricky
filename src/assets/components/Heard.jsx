import React from 'react'
import "./styles/Heard.css"
import font from "./styles/images/image 2.png"

import fondo from "./styles/images/image 3.png"
const Heard = () => {
  return (

    <main className='Front__Page'>
      <header>
        <div className='Imagefondo'>
          <img src={fondo} alt="" />
          <div className='Image'>
            <img src={font} alt="" />
          </div>
        </div>

      </header>
    </main>

  )
}

export default Heard