import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'
const axios = require('axios');

export const Facilitadores = () => {

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
            facilitadores: info.attributes.facilitadores,
            alumnos: info.attributes.alumnos
          }
        })
        setRespuestaAPI(clases);
      };
      consultaAPI();
    },[]);


  return (
    <>
      <HomeNav />
      <div className='about__clase'>
        <div className='container'>
          <div className='about__text'>
            <h4 className='about__h4'>SAMADHI STUDIO</h4>
            <h1 className='about__h1'>Facilitadores</h1>
            <hr className='about__hr'></hr>
            <p className='about__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>

          <div className='about__tipo-clase'>
          

          {Object.keys(respuestaAPI).length > 0 &&
            respuestaAPI.map((facilitador) => {
            if(!facilitador){
              return <div>Loading..</div>
            } else {
              return(
              <div className='row'>
                <h1>{facilitador.title}</h1>
                {facilitador.facilitadores.map(info => {
                  return(
                    <div className='col-4 about__col animate__animated animate__fadeIn'>
                        <div className="card about__card" style={{width: '18rem'}}>
                          <Link to={`/facilitador/${info.id}/`}>
                            <img className="card-img-top about__img-card" src={info.uploadimg} alt="logo" />
                          </Link>
                          <div className="card-body">
                              <h5 className="card-title about__card-title">{info.name} {info.lastname}</h5>
                              <p className="card-text about__card-text">{info.activity}</p>
                          </div>
                        </div>
                    </div>)})}
                  
              </div>)}})}

          </div>
        </div>
      </div>

      <Foot />
    </>
  )}


