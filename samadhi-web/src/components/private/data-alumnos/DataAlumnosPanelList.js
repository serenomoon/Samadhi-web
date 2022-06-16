import React from 'react'
import { DataAlumnosList } from './DataAlumnosList'

export const DataAlumnosPanelList = ({alumnos}) => {
  return (
       <>
        <div class="panel panel-primary" id="result_panel">
            <div class="panel-heading">
                <h3 class="dataalumnos__panel-title">Yoga</h3>
            </div>
            <div class="panel-body">
               <ul class="list-group dataalumnos__list-group">
                   <DataAlumnosList 
                        alumnos={alumnos}
                   />
               </ul>
            </div>
        </div>
    </>
  )
}
