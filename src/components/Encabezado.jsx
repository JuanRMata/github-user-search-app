import React from 'react'
import { useState} from 'react'
import '../styles/Encabezado.css'
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';


const Encabezado = () => {
    const [modo,setModo] = useState(true)

    const alternarModo = () =>{
        setModo(!modo)
    }

  return (
    <div className='encabezado'>
      <p>devfinder</p>

      <p onClick={alternarModo}>
        {modo ? 'dark' : 'light'}
        <img src={modo ? iconMoon : iconSun} />
      </p>
 
    </div>
  )
}

export default Encabezado
