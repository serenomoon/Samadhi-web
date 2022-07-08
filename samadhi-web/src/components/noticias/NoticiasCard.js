import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from '../../helpers/animateScroll';
import { yogaImages } from '../../helpers/yogaImages';
const axios = require('axios');

export const NoticiasCard = ({title,date,mensaje,uploadimg,id}) => {

  window.addEventListener("scroll", animateScroll);
 
  return (
    <>
      <section>
      <div className="container cardnews__reveal">
        <div className="text-container">
          <div className="text-box cardnews__left-textbox">
            <h3>{title}</h3>
            <span>{date}</span>
            <p>
              {mensaje}
            </p>
            <Link to={`noticias/${id}/`} style={{textDecoration: 'none'}}>
              <button className='cardnews__btn btn'>LEER MAS</button>
            </Link>
          </div>
          <div className="text-box">
            <img src={uploadimg} className='cardnews__img' alt='news'/>
          </div>
        </div>
      </div>
    </section>
  </>
  )
};
