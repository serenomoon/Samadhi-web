import React from 'react'
import { yogaImages } from '../../../helpers/yogaImages'
import { HomeNav } from '../../ui/HomeNav'

export const DataFacilitadoresVer = () => {
  return (
    <>
        <HomeNav />

        <div className='container facilitador__facilitador'>
          <div className='facilitador__title'>
              <h1>Julieta Fernández</h1>
              <span>Ayahuasca Yoga</span>
          </div>
          <div className='row facilitador__row'>
              <div className='col-6 facilitador__col-img animate__animated animate__fadeInLeft'>
                  <img src={ yogaImages(`./facilitadores/julieta.jpg`) } alt="logo" />
              </div>
              <div className='col-6 facilitador__col-text animate__animated animate__fadeInRight'>
                  <h5 className='facilitador__col-title'>Email<hr/></h5>
                  <p>ricardito@gmail.com</p>
                  <h5 className='facilitador__col-title'>Direccion<hr/></h5>
                  <p>Sarmiento 4670</p>
                  <h5 className='facilitador__col-title'>Teléfono<hr/></h5>
                  <p>3523-3578</p>
              </div>
          </div>
        </div>
    </>
  )
}
