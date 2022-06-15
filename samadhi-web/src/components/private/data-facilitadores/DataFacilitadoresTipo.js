import React from 'react'
import { DataFacilitadoresCard } from './DataFacilitadoresCard'

export const DataFacilitadoresTipo = ({facilitadores}) => {
  return (
    <>
        <div className='row'>
            <div className='about__tipo-clase'>
            <h1 className='mt-5'>Yoga</h1>
            <DataFacilitadoresCard 
              facilitadores = {facilitadores}
            />
            </div>   
        </div>
    </>
  )
}
