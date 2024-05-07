import React, {useState,useEffect} from 'react'
import Encabezado from './Encabezado'
import Buscador from './Buscador'
import Resultado from './Resultado'
import '../styles/App.css'

const App = () => {
  const [modo,setModo] = useState(true)
  const [usuario,setUsuario] = useState('')
  const [arroba,setArroba] = useState('')
  const [fechaInicio,setFechaInicio] = useState('')
  const [biografia,setBiografia] = useState('')
  const [repos,setRepos] = useState(0)
  const [seguidores,setSeguidores] = useState(0)
  const [siguiendo,setSiguiendo] = useState(0)
  const [ubicacion,setUbicacion] = useState('')
  const [empresa,setEmpresa] = useState('')
  const [sitioWeb,setSitioWeb] = useState('')
  const [imagen,setImagen] = useState('')
  const [redes,setRedes] = useState('')
  const [isValidUsuario, setIsValidUsuario] = useState(false)

  return (

    <div className={`principal ${modo ? 'principal-claro' : 'principal-oscuro'}`}>

      <div className='contenedor'> 

        <div className='encabezado'>
          <Encabezado modo={modo} setModo={setModo}/>
        </div>
       
        <div className='buscador'>
          <Buscador 
          modo={modo}
          setUsuario={setUsuario}
          setArroba={setArroba}
          setFechaInicio={setFechaInicio}
          setBiografia={setBiografia}
          setRepos={setRepos}
          setSeguidores={setSeguidores}
          setSiguiendo={setSiguiendo}
          setUbicacion={setUbicacion}
          setEmpresa={setEmpresa}
          setSitioWeb={setSitioWeb}
          setImagen={setImagen}
          setRedes={setRedes}
          isValidUsuario={isValidUsuario}
          setIsValidUsuario={setIsValidUsuario}
          usuario={usuario}
          />
        </div>

        {isValidUsuario ? (
        <div className='resultado'>
          <Resultado 
          modo={modo}
          usuario={usuario}
          arroba={arroba}
          fechaInicio={fechaInicio}
          biografia={biografia}
          repos={repos}
          seguidores={seguidores}
          siguiendo={siguiendo}
          ubicacion={ubicacion}
          empresa={empresa}
          sitioWeb={sitioWeb}
          imagen={imagen}
          redes={redes}
          />
        </div>
        ) : null}
      </div>

      

    </div>
  ) 
}

export default App
