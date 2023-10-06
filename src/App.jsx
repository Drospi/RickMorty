
import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav'

function App() {
  const URL = 'https://rickandmortyapi.com/api/character'
  const [datos, setDatos] = useState([])
  fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error de red');
    }
    return response.json();
  })
  .then(data => {
    setDatos(data.results)
  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:' + error.message);
  });
  return(
  <>
  <Nav></Nav>
  <div className="personajes">
    {datos.map((el,key)=>{
      return <div key={key} className="card">
        <img src={el.image} alt={el.name} />
        <h2>{el.name}</h2>
        <p>{el.species+' '+el.status}</p>
      </div>
    })}
  </div>
  
  </>)
}

export default App
