import React from 'react'
import { useParams } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { useGetInfo } from '../../hooks/useGetInfo'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const Facilitador = () => {

    const tipo = "facilitadoresid"
    const params = useParams();
  
    const {data} =useGetInfo(tipo,params.id);
    
    if (Object.keys(data).length === 0) {

    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;

    } else {

    return (
    <>
    <HomeNav />
    <div className='container facilitador__facilitador'>
        <div className='facilitador__title'>
            <h1>{data.attributes.name} {data.attributes.lastname}</h1>
            <span>{data.attributes.activity}</span>
        </div>
        <div className='row facilitador__row'>
            <div className='col-6 facilitador__col-img animate__animated animate__fadeInLeft'>
                <img src={data.attributes.uploadimgname} alt="logo" />
            </div>
            <div className='col-6 facilitador__col-text animate__animated animate__fadeInRight'>
                <h5 className='facilitador__col-title'>Bio<hr/></h5>
                <p>{data.attributes.bio}</p>
                <h5 className='facilitador__col-title'>Servicio<hr/></h5>
                <p>{data.attributes.service}</p>
            </div>
        </div>
    </div>
    <Foot />
    </>
  )}
}
