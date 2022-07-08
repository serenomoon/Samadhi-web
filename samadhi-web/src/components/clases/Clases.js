import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'
const axios = require('axios');

export const Clases = () => {

  const [url, setUrl] = useState('http://127.0.0.1:8000/api/clasesdata/');
    const [respuestaAPI, setRespuestaAPI] = useState({});
    
    useEffect(() => {
      const consultaAPI = async () => {
        const consulta = await axios({ url });
        const data = consulta.data.data
        const clases = data.map( info => {
          return {
            type: info.type,
            id: info.id,
            title: info.attributes.title,
            mensaje: info.attributes.mensaje
          }
        })
        setRespuestaAPI(clases);
      };
      consultaAPI();
    },[]);

  if (Object.keys(respuestaAPI).length === 0) {

    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;

  } else {


  return (
    <>
      <HomeNav />
      <div className='clases__clase'>
        <div className='container'>
          <div className='clases__text'>
            <h4 className='clases__h4'>SAMADHI STUDIO</h4>
            <h1 className='clases__h1'>Tipos de Clases</h1>
            <hr className='clases__hr'></hr>
            <p className='clases__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>
          <div className='row'>

            {respuestaAPI.map(info=>{
              return(
                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={info.uploadimg} alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">{info.title}</h5>
                              <p className="card-text clases__card-text">{info.mensaje}</p>
                              <Link to={`/clase/${info.id}`} style={{textDecoration: 'none'}}>
                                <button className='btn btn-green'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>
            )})}


          </div>
        </div>
      </div>
      <Foot />
    </>
  )}
}
