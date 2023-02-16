import React, { useEffect, useState } from 'react'
import { numberPage } from '../../util/handlePagination'
import "./styles/Pagination.css"
const array = []
const Pagination = ({ setPage, location, RESIDENTS_PERPACE, num, setNum }) => {


  const [states, setStates] = useState()
  const next = () => {


    if (num == 1) {

      setNum(num + 1)
      console.log("1dff" + num);

    } else if (num == 2) {

      setNum(num + 1)

    } else if (num == 3) {

      setNum(num + 2)

    } else {
      setNum(1)
    }


  }
  const backen = () => {



    if (num == 2) {

      setNum(num - 1)

    } else if (num == 3) {

      setNum(num - 2)

    } else {
      setNum(1)
    }


  }



  useEffect(() => {



  }, [])


  return (
    <footer className='footer'>
      <div className='List_Pagination'>
        <div>
          <button className='btn' onClick={backen}><i className='bx bxs-chevrons-left'></i></button>
        </div>
        <div className='list_number'>
          {
            numberPage(location, RESIDENTS_PERPACE, num)?.map(number => <div className='div_num' onClick={() => setPage(number)} key={number}>{number}</div>)
          }
        </div>
        <div>
          <button className='btn' onClick={next}><i class='bx bxs-chevrons-right'></i></button>
        </div>

      </div>
    </footer>
  )
}



export default Pagination