import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeNav } from '../../ui/HomeNav'
import { DataFacilitadoresTipo } from './DataFacilitadoresTipo'

export const DataFacilitadores = () => {

  const [facilitadores, setFacilitadores] = useState(false)

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Facilitadores</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/facilitadores-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (facilitadores === true ? ' btn-red' : '') }  onClick={()=> setFacilitadores(!facilitadores)}>ELIMINAR</button>
          </Link>
        </div>

        <DataFacilitadoresTipo 
          facilitadores={facilitadores}
        />

        <DataFacilitadoresTipo 
          facilitadores={facilitadores}
        />

      </div>
    </>
  )
}