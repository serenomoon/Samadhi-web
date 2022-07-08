import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../../helpers/yogaImages'
import { useGetInfo } from '../../../hooks/useGetInfo'
import { HomeNav } from '../../ui/HomeNav'
import { DataNoticiasCard } from './DataNoticiasCard'
const axios = require('axios');

export const DataNoticias = () => {

  // const tipo = "noticias"
  // const { data } = useGetInfo(tipo);

  const [trashoption, setTrashoption] = useState(false)

  const [url, setUrl] = useState('http://127.0.0.1:8000/api/noticiasdata/');
  const [respuestaAPI, setRespuestaAPI] = useState({});
  const [change, setChange] = useState(true);
 
  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios({ url });
      const data = consulta.data.data
      const clases = data.map( info => {
        return {
          type: info.type,
          id: info.id,
          title: info.attributes.title,
          mensaje: info.attributes.mensaje,
          date: info.attributes.date,
          time: info.attributes.time,
          uploadimg: info.attributes.uploadimg
        }
      })
      setRespuestaAPI(clases);
    };
    consultaAPI();
  },[change]);  

  const handleDeleteProperty = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/noticiasdata/${id}/`)
    .then(res => {
      console.log(res.request.status);
      console.log(res.data);
      setChange(!change);
    })
    .catch(err => console.log(err))
  }

 
  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Noticias</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/noticias-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
          </Link>
        </div>
      
        <div className='row'>
        {Object.keys(respuestaAPI).length > 0 &&
          respuestaAPI.map(noticia => {
            if(!noticia){
              return <div>Cargando...</div>
            } else {
              return(
                <DataNoticiasCard
                  handleDeleteProperty = {handleDeleteProperty}
                  id = {noticia.id} 
                  trashoption = {trashoption}
                  title={noticia.title}
                  mensaje={noticia.mensaje}
                  uploadimg={noticia.uploadimg}
                />

              )}
          })}
              
        </div>
      </div>
    </>
  )}

