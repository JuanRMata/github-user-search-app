import React from 'react'
import '../styles/Resultado.css'

const Resultado = ({modo}) => {
  return (
    <div className={`cont-result ${modo ? 'cont-result-claro': 'cont-result-oscuro'}`}>
       <div className='imagen-perfil'>
        imagen
       </div>

       <div className='informacion-perfil'>

        <div className='nombre-fecha'>
          <h2 className={`nombrep ${!modo ? 'nombrep-claro' : 'nombrep-oscuro'}`}>Nombre</h2>
          <p className={`fechap ${modo ? 'fechap-claro' : 'fechap-oscuro'}`}>Fecha de ingreso</p>
        </div>

        <p className='arroba'>arroba</p>

        <p className='biografia'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem atque consectetur, 
        voluptates quo ducimus tempora molestiae ipsum cumque sed perferendis aut totam unde dicta sapiente quae voluptatibus a rem corporis!</p>

        <div className={`datos ${modo ? 'datos-claro' : 'datos-oscuro'}`}>
          <div className='datos-titulos'>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Repos</p>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Followers </p>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Following</p>
          </div>
          <div className='datos-resultados'>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>100</p>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>200</p>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>300</p>
          </div>
        </div>

        <div className='contacto'>

          <div className='contacto-redes'>
            <p>ubicacion</p>
            <p>Link</p>
          </div>
          <div className='contacto-empresa'>
            <p>Contacto redes</p>
            <p>Companiaa</p>
          </div>

        </div>

       </div>

    </div>
  )
}

export default Resultado
