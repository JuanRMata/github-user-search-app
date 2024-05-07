import React, {useState,useEffect} from 'react'
import '../styles/Buscador.css'
import Lupa from '../assets/icon-search.svg'

const Buscador = ({
  modo,
  setUsuario,
  setArroba,
  setFechaInicio,
  setBiografia,
  setRepos,
  setSeguidores,
  setSiguiendo,
  setUbicacion,
  setEmpresa,
  setSitioWeb,
  setImagen,
  setRedes,
  isValidUsuario,
  usuario,
  setIsValidUsuario
}) => {

  const[busqueda,setBusqueda] = useState('')



  const handleBuscar = async (e) => {
    e.preventDefault()

      setUsuario('')
      setArroba('')
      setFechaInicio('')
      setBiografia('')
      setRepos(0)
      setSeguidores(0)
      setSiguiendo(0)
      setUbicacion('')
      setEmpresa('')
      setSitioWeb('')
      setImagen('')
      setRedes('')

    if(busqueda === ''){
      setIsValidUsuario(false)
      return
    }
    else{

      const consultarAPI = async () => {
        const url = `https://api.github.com/users/${busqueda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(respuesta)
        console.log(resultado)
        return {resultado, status: respuesta.status}
      }
      const {resultado, status} = await consultarAPI()

      if(resultado && status === 200){ 
        setUsuario(resultado.name)
        setArroba(resultado.login)
        setFechaInicio(new Date(resultado.created_at).toLocaleDateString())
        setBiografia(resultado.bio)
        setRepos(resultado.public_repos)
        setSeguidores(resultado.followers)
        setSiguiendo(resultado.following)
        setUbicacion(resultado.location)
        setEmpresa(resultado.company)
        setSitioWeb(resultado.blog)
        setImagen(resultado.avatar_url)
        setRedes(resultado.email)

        setIsValidUsuario(true)
      }
      else{
        setIsValidUsuario(false)
      }
    }
  }
  


  return (
    <form onSubmit={handleBuscar} className={`conten ${modo ? 'conten-claro' : 'conten-oscuro'}`}> 

      <div className='lupa-input'>
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
        {isValidUsuario ? null : <label className='label-exist'>No existe</label>}
        <input className='boton-buscar' type='submit' value='Search'/>
      </div>

    </form>
  )
}

export default Buscador
