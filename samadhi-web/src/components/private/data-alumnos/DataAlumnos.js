import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeNav } from '../../ui/HomeNav'
import { DataAlumnosPanelList } from './DataAlumnosPanelList'

export const DataAlumnos = () => {

    const [alumnos, setAlumnos] = useState(false)

  return (
    (
        <>
          <HomeNav />
          <div className='container'>
            <div className='clases__text mt-5'>
              <h4 className='clases__h4'>SAMADHI STUDIO</h4>
              <h1 className='clases__h1'>Administrar Alumnos</h1>
              <hr className='clases__hr'></hr>
            </div>

            <div className='datanoticias__buttons'>
                <Link to='/data/alumnos-add' style={{ textDecoration: 'none' }}>
                    <button className='btn btn-green'>AÑADIR</button>
                </Link>
                <Link to='' style={{ textDecoration: 'none' }}>
                    <button className={ 'btn btn-green' + (alumnos === true ? ' btn-red' : '') }  onClick={()=> setAlumnos(!alumnos)}>ELIMINAR</button>
                </Link>
            </div>
    
            <DataAlumnosPanelList 
                alumnos={alumnos}
            />
            <DataAlumnosPanelList 
                alumnos={alumnos}
            />
    
          </div>
        </>
      )
  )
}
