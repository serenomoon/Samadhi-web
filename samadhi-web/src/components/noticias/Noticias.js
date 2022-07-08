import React from 'react';
import { yogaImages } from '../../helpers/yogaImages';
import { HomeNav } from '../ui/HomeNav';
import { Foot } from '../home/Foot';
import { useParams } from 'react-router-dom';
import { useGetInfo } from '../../hooks/useGetInfo';

export const Noticias = () => {

  const tipo = "noticiasid"
  const params = useParams();

  const {data} =useGetInfo(tipo,params.id);

  if (Object.keys(data).length === 0) {
    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;
  } else {

  return (
    <>
      <HomeNav />
      <div className='container news__new animate__animated animate__fadeIn'>
          <img src={data.attributes.uploadimg} className='cardnews__img' alt='news'/>
          <div className='news__text'>
            <h1>{data.attributes.title}</h1>
            <p>
              {data.attributes.mensaje}
            </p>
            <button className='btn news__btn'><i class="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )}
}
