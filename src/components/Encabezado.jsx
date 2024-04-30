import React from 'react'
import '../styles/Encabezado.css'
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';


const Encabezado = ({modo, setModo}) => {
 
    const alternarModo = () =>{
        setModo(!modo)
    }

  return (
    <div className={`encabezado ${modo ? 'modo-claro' : 'modo-oscuro'}`}>
      <p className='texto'>devfinder</p>
       
      <p onClick={alternarModo} className={`${modo ? 'icono-comun icono-dark' : 'icono-comun icono-light'}`}> {modo ? 'DARK' : 'LIGHT'} <img src={modo ? iconMoon : iconSun} />  </p>

    </div>
  )
}

export default Encabezado
