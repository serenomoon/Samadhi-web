import React from 'react';
import { yogaImages } from '../../helpers/yogaImages';
import { HomeNav } from '../ui/HomeNav';
import { Foot } from './Foot';

export const News = () => {
  return (
    <>
      <HomeNav />
      <div className='container news__new animate__animated animate__fadeIn'>
          <img src={ yogaImages(`./news.jpg`) } className='cardnews__img' alt='news'/>
          <div className='news__text'>
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
            <button className='btn news__btn'><i class="fas fa-share"></i></button>
            
          </div>
      </div>
      <Foot />
    </>
  )
}
