import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './util/getRandomNumber'
import LocationInfo from './assets/components/LocationInfo'
import Pagination from './assets/components/Pagination'
import ResidenstList from './assets/components/ResidenstList'
import ResidentsForm from './assets/components/ResidentsForm'
import Heard from './assets/components/Heard'

const RESIDENTS_PERPACE = 12
function App() {
  const [location, setLocation] = useState()
  const [namelocation, setNamelocation] = useState("")
  const [page, setPage] = useState(1)
  const [num, setNum] = useState(1)

  const handleSubmit = (e) => {
    setNum(1)
    e.preventDefault()
    setNamelocation(e.target.idlocation.value)
    console.log(namelocation);

  }

  const pagination = () => {

    const maxLimit = page * RESIDENTS_PERPACE
    const minLimit = maxLimit - RESIDENTS_PERPACE
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }






  useEffect(() => {
    setPage(1)
    const dimension = namelocation === "" ? getRandomNumber(126) : namelocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [namelocation])


  return (
    <div className="App">
      < Heard />
      < ResidentsForm handleSubmit={handleSubmit} />
      < LocationInfo location={location} />
      < ResidenstList pagination={pagination} />
      < Pagination location={location} RESIDENTS_PERPACE={RESIDENTS_PERPACE} setPage={setPage} num={num} setNum={setNum} />
    </div>
  )
}

export default App
