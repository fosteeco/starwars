import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './index.css'
import Header from './components/Header'
import NavLinks from './components/Nav'

function App() {
  const [characters, setCharacters] = useState([])
  const [systems, setSystems] = useState([])
  const [species, setSpecies] = useState([])

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
    axios
      .get('https://swapi.dev/api/planets/')
      .then(res => {
        setSystems(res.data.results)
      })
      .catch(err => console.log(err))
    axios
      .get('https://swapi.dev/api/species/')
      .then(res => {
        setSpecies(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(characters)
  console.log(systems)
  console.log(species)
  return (
    <>
      <Header />
      <NavLinks />
      <div className='container'>
        
      </div>
    </>
  )
}

export default App