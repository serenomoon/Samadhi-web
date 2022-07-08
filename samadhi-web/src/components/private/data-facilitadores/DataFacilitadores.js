import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../../helpers/yogaImages'
import { useGetInfo } from '../../../hooks/useGetInfo'
import { HomeNav } from '../../ui/HomeNav'
import { DataFacilitadoresCard } from './DataFacilitadoresCard'
const axios = require('axios');

export const DataFacilitadores = () => {

  // const tipo = "clases"
  // const { data } = useGetInfo(tipo);

  const [trashoption, setTrashoption] = useState(false)

  const [url, setUrl] = useState('http://127.0.0.1:8000/api/clasesdata/');
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
          facilitadores: info.attributes.facilitadores,
          alumnos: info.attributes.alumnos
        }
      })
      setRespuestaAPI(clases);
    };
    consultaAPI();
  },[change]);

  const handleDeleteProperty = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/facilitadoresdata/${id}/`)
    .then(res => {
      console.log(res.request.status);
      console.log(res.data);
      setChange(!change);
    })
    .catch(err => console.log(err))
  }

  if (Object.keys(respuestaAPI).length === 0) {

    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;

  } else {

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Facilitadores</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/facilitadores-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (trashoption === true ? ' btn-red' : '') }  onClick={()=> setTrashoption(!trashoption)}>ELIMINAR</button>
          </Link>
        </div>

       
        {respuestaAPI.map((facilitador) => {
          if(!facilitador){
            return <div>Loading..</div>
          } else {
            return(
                <div className='about__tipo-clase'>
                  <h1 className='mt-5'>{facilitador.title}</h1>
                  <div className='row'>
                    {facilitador.facilitadores.map(info => {
                        return(
                          <DataFacilitadoresCard 
                              key={info}
                              id={info.id}
                              trashoption={trashoption}
                              name = {info.name}
                              handleDeleteProperty={handleDeleteProperty} 
                              lastname = {info.lastname} 
                              activity = {info.activity}
                              uploadimg = {info.uploadimg}
                          />
                        )
                    })}
                  </div>   
                </div>
            )
          }
        })}
        


      </div>
    </>
  )}
}