import React from 'react';
import { useParams } from 'react-router-dom';
import { yogaImages } from '../../helpers/yogaImages';
import { useGetInfo } from '../../hooks/useGetInfo';
import { Foot } from '../home/Foot';
import { HomeNav } from '../ui/HomeNav';


export const ClasesMas = () => {

  const tipo = "clasesid"
  const params = useParams();

  const {data} =useGetInfo(tipo,params.id);
  
  
  if (Object.keys(data).length === 0) {
    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;
  } else {

  return (
    <>
      <HomeNav />
      <div className='container clasesmas__new animate__animated animate__fadeIn'>
          <img src={data.attributes.uploadimg} className='cardnews__img' alt='news'/>
          <div className='clasesmas__text'>
            <h1>{data.attributes.title}</h1>
            <p>
              {data.attributes.mensaje}
            </p>
            <button className='btn clasesmas__btn'><i class="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )}
}
