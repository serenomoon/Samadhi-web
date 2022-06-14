import React from 'react'
import { yogaImages } from '../../helpers/yogaImages'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const Facilitador = () => {
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
                <h5 className='facilitador__col-title'>Bio<hr/></h5>
                <p>Ea anim non pariatur cillum ullamco minim officia eiusmod est Lorem aliqua.Aliquip incididunt deserunt quis veniam magna velit est tempor labore est minim.</p>
                <h5 className='facilitador__col-title'>Servicio<hr/></h5>
                <p>Officia consequat amet minim consectetur est voluptate eiusmod ullamco non cillum dolore.Et anim nulla Lorem nostrud sint nostrud irure proident officia do.Eu occaecat anim non reprehenderit nisi tempor anim elit quis.</p>
            </div>
        </div>
    </div>
    <Foot />
    </>
  )
}
