import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeNav } from '../../ui/HomeNav'
import { DataNoticiasCard } from './DataNoticiasCard'

export const DataNoticias = () => {

  const [noticias, setNoticias] = useState(false)

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Noticias</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/noticias-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (noticias === true ? ' btn-red' : '') }  onClick={()=> setNoticias(!noticias)}>ELIMINAR</button>
          </Link>
        </div>

        <div className='row'>
                  
            <DataNoticiasCard 
              noticias = {noticias}
            />
              
        </div>
      </div>
    </>
  )
}
