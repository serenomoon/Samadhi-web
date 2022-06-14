import React from 'react';
import { yogaImages } from '../../helpers/yogaImages';
import { Foot } from '../home/Foot';
import { HomeNav } from '../ui/HomeNav';


export const ClasesMas = () => {
  return (
    <>
      <HomeNav />
      <div className='container clasesmas__new animate__animated animate__fadeIn'>
          <img src={ yogaImages(`./clasesexample1.jpg`) } className='cardnews__img' alt='news'/>
          <div className='clasesmas__text'>
            <h1>Yogui Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
            </p>
            <button className='btn clasesmas__btn'><i class="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )
}
