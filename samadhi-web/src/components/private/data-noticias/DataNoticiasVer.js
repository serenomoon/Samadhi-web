import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGetInfo } from '../../../hooks/useGetInfo';
import { HomeNav } from '../../ui/HomeNav'
const axios = require('axios');

export const DataNoticiasVer = () => {


  const tipo = "noticiasid"
  const params = useParams();

  const {data} =useGetInfo(tipo,params.id);
  
  
  if (Object.keys(data).length === 0) {
    return <>Still loading...</>;
  } else {

  return (
    <>
        <HomeNav />

        <div className='container facilitador__facilitador'>
          <div className='facilitador__title'>
              <h1>{data.attributes.title}</h1>
              <span>{data.attributes.date}</span>
          </div>
          <div className='row facilitador__row'>
              <div className='col-6 facilitador__col-img animate__animated animate__fadeInLeft'>
                  <img src={data.attributes.uploadimg} alt="logo" />
              </div>
              <div className='col-6 facilitador__col-text animate__animated animate__fadeInRight'>
                  <h5 className='facilitador__col-title'>Titulo<hr/></h5>
                  <p>{data.attributes.title}</p>
                  <h5 className='facilitador__col-title'>Mensaje<hr/></h5>
                  <p>{data.attributes.mensaje}</p>
                  <h5 className='facilitador__col-title'>Día y hora<hr/></h5>
                  <p>{data.attributes.date} / {data.attributes.time}</p>
                  <Link to={`/data/noticias-actualizar/${params.id}`}>
                      <button className='btn btn-green'>Editar</button>
                  </Link>
              </div>
          </div>
        </div>
    </>
  )
}
}
