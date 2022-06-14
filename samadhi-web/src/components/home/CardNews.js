import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from '../../helpers/animateScroll';
import { yogaImages } from '../../helpers/yogaImages';

export const CardNews = () => {

  
  window.addEventListener("scroll", animateScroll);


  return (
    <>
    <section>
      <div className="container cardnews__reveal">
        <div className="text-container">
          <div className="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link to='/news' style={{textDecoration: 'none'}}>
              <button className='cardnews__btn btn'>LEER MAS</button>
            </Link>
          </div>
          <div className="text-box">
            <img src={ yogaImages(`./news.jpg`) } className='cardnews__img' alt='news'/>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className="container cardnews__reveal">
        <div className="text-container">
          <div className="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
            <button className='cardnews__btn btn'>LEER MAS</button>
          </div>
          <div className="text-box">
            <img src={ yogaImages(`./news.jpg`) } className='cardnews__img' alt='news'/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
