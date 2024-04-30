import React, {useState} from 'react'
import '../styles/Buscador.css'
import Lupa from '../assets/icon-search.svg'

const Buscador = ({modo}) => {

  const[busqueda,setBusqueda] = useState('')

  return (
    <form className={`conten ${modo ? 'conten-claro' : 'conten-oscuro'}`}> 

      <div>
        <img src={Lupa} alt='Lupa'/>
        <input 
        type="text" 
        onChange={(e) => (setBusqueda(e.target.value))}
        value={busqueda}
        placeholder='Search Github username...'
        className={`ingreso ${modo ? 'ingreso-claro' : 'ingreso-oscuro'}`}
        />
      </div>

      <div>
        {!busqueda == '' ? null : <label className='label-exist'>No existe</label>}
        <button className='boton-buscar'>Search</button>
      </div>

    </form>
  )
}

export default Buscador
