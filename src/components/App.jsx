import React, {useState} from 'react'
import Encabezado from './Encabezado'
import Buscador from './Buscador'
import Resultado from './Resultado'
import '../styles/App.css'

const App = () => {
  const [modo,setModo] = useState(true)

  return (

    <div className={`principal ${modo ? 'principal-claro' : 'principal-oscuro'}`}>

      <div className='contenedor'> 

        <div className='encabezado'>
          <Encabezado modo={modo} setModo={setModo}/>
        </div>
       
        <div className='buscador'>
          <Buscador modo={modo}/>
        </div>
        
        <div className='resultado'>
          <Resultado modo={modo}/>
        </div>

      </div>

      

    </div>
  ) 
}

export default App
