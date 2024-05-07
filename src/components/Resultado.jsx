import React from 'react'
import '../styles/Resultado.css'
import location from '../assets/icon-location.svg'
import link from '../assets/icon-website.svg'
import twitter from '../assets/icon-twitter.svg'
import company from '../assets/icon-company.svg'

const Resultado = ({
  modo,
  usuario,
  arroba,
  fechaInicio,
  biografia,
  repos,
  seguidores,
  siguiendo,
  ubicacion,
  empresa,
  sitioWeb,
  imagen,
  redes
}) => {
  return (
    <div className={`cont-result ${modo ? 'cont-result-claro': 'cont-result-oscuro'}`}>
       <div>
        <img src={imagen} alt="Imagen de usuario" className='imagen-perfil'/>
       </div>

       <div className='informacion-perfil'>

        <div className='nombre-fecha'>
          <h2 className={`nombrep ${!modo ? 'nombrep-claro' : 'nombrep-oscuro'}`}>{usuario}</h2>
          <p className={`fechap ${modo ? 'fechap-claro' : 'fechap-oscuro'}`}>{fechaInicio}</p>
        </div>

        <p className='arroba'>@{arroba}</p>

        <p className='biografia'>{biografia}</p>

        <div className={`datos ${modo ? 'datos-claro' : 'datos-oscuro'}`}>
          <div className='datos-titulos'>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Repos</p>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Followers </p>
            <p className={`info ${modo ? 'info-claro' : 'info-oscuro'}`}>Following</p>
          </div>
          <div className='datos-resultados'>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>{repos}</p>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>{seguidores}</p>
            <p className={`info-res ${modo ? 'info-res-claro' : 'info-res-oscuro'}`}>{siguiendo}</p>
          </div>
        </div>

        <div className='contacto'>

          <div className='contacto-redes'>

            <div className='sub-contacto'>
              <img src={location} alt="icon-location" />
              <p className={`${modo ? 'contactos-claros' : 'contactos-oscuro'} ${ubicacion ? '' : 'vacios'}`}>{ubicacion ? ubicacion : 'NULL'}</p>
            </div>

            <div className='sub-contacto inferior'>
              <img src={link} alt="icon-link" />
              <p className={`${modo ? 'contactos-claros' : 'contactos-oscuro'} ${sitioWeb ? '' : 'vacios'}`}>{sitioWeb ? sitioWeb : 'NULL'}</p>
            </div>
            
          </div>

          <div className='contacto-redes'>

            <div className='sub-contacto'>
                <img src={twitter} alt="icon-twitter" />
                <p className={`${modo ? 'contactos-claros' : 'contactos-oscuro'} ${redes ? '' : 'vacios'}`}>{redes ? redes : 'NULL'}</p>
            </div>

            <div className='sub-contacto inferior'>
                <img src={company} alt="icon-company" />
                <p className={`${modo ? 'contactos-claros' : 'contactos-oscuro'} ${empresa ? '' : 'vacios'}`}>{empresa ? empresa : 'NULL'}</p>
            </div>
          </div>

        </div>

       </div>

    </div>
  )
}

export default Resultado
