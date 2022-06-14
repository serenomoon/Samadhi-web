import React from 'react';
import { yogaImages } from '../../helpers/yogaImages';
import { HomeNav } from '../ui/HomeNav';
import { Foot } from './Foot';
import { CardNews } from './CardNews';
import { ClasesCall } from './ClasesCall';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <img src={ yogaImages(`./fondo-home.jpg`) } className="home__background img-fluid" alt='fondo'/>
        <div className='home__title-text'>
            <div className='home__title-logo'>
              <img src={ yogaImages(`./logo.png`) } className="home__logo img-fluid" alt='logo'/>
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

        <CardNews />

        <Foot />

    </div>
  )
}
