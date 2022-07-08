import React, { useEffect, useState } from 'react';
import { yogaImages } from '../../helpers/yogaImages';
import { HomeNav } from '../ui/HomeNav';
import { Foot } from './Foot';

import { ClasesCall } from './ClasesCall';
import { Link } from 'react-router-dom';
import { NoticiasCard } from '../noticias/NoticiasCard';
const axios = require('axios');

export const Home = () => {
  
  const [url, setUrl] = useState('http://127.0.0.1:8000/api/noticiasdata/');
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
          mensaje: info.attributes.mensaje,
          date: info.attributes.date,
          time: info.attributes.time,
          uploadimg: info.attributes.uploadimg
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
    <div>
        <img src={ yogaImages(`./fondo-home.jpg`) } className="home__background img-fluid" alt='fondo'/>
        <div className='home__title-text'>
            <div className='home__title-logo'>
              <img src={ yogaImages(`./logo.svg`) } className="home__logo img-fluid" alt='logo'/>
              <h3 className='home__title'>JULIETA FERNANDEZ</h3>
            </div>
            <div className='home__text'>
              <h1>YOGA.</h1>
              <h1>AYURVEDA.</h1>
              <h1>PRIVATE CHEF.</h1>
              <Link to='/about'>
                <button className='btn'>SABER MAS</button>
              </Link>
            </div>
        </div>

        <HomeNav />

        <ClasesCall />

        {respuestaAPI.map(noticia => {
          if(!noticia){
            return <div>Cargando...</div>
          } else {
            return(
            <NoticiasCard 
              id = {noticia.id}
              title = {noticia.title}
              date = {noticia.date}
              mensaje = {noticia.mensaje}
              uploadimg = {noticia.uploadimg}
            />
            )}
        })}

        <Foot />

    </div>
  )
}}
