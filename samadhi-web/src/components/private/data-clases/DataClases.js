import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeNav } from '../../ui/HomeNav'
import { DataClasesCard } from './DataClasesCard'

export const DataClases = () => {

  const [clases, setClases] = useState(false)

  return (
    <>
      <HomeNav />
      <div className='container'>
        <div className='clases__text mt-5'>
          <h4 className='clases__h4'>SAMADHI STUDIO</h4>
          <h1 className='clases__h1'>Administrar Clases</h1>
          <hr className='clases__hr'></hr>
        </div>

        <div className='datanoticias__buttons'>
          <Link to='/data/clases-add' style={{ textDecoration: 'none' }}>
              <button className='btn btn-green'>AÑADIR</button>
          </Link>
          <Link to='' style={{ textDecoration: 'none' }}>
              <button className={ 'btn btn-green' + (clases === true ? ' btn-red' : '') }  onClick={()=> setClases(!clases)}>ELIMINAR</button>
          </Link>
        </div>

        <div className='row'>
                  
            <DataClasesCard 
              clases = {clases}
            />
              
        </div>
      </div>
    </>
  )
}
