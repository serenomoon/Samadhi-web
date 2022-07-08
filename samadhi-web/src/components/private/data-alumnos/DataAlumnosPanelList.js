import React, { useEffect, useState } from 'react'
import { yogaImages } from '../../../helpers/yogaImages';
import { useGetInfo } from '../../../hooks/useGetInfo';
import { DataAlumnosList } from './DataAlumnosList';
const axios = require('axios');

export const DataAlumnosPanelList = ({trashoption,handleDeleteProperty,data}) => {

        
    return (
        <>
        {Object.keys(data).length > 0 &&
        data.map((alumno) => {
            if(!alumno){
                return <div>Loading..</div>
              } else {
                return(
                <div class="panel panel-primary" id="result_panel">
                    <div class="panel-heading">
                        <h3 class="dataalumnos__panel-title">{alumno.title}</h3>
                    </div>
                    <div class="panel-body">
                       <ul class="list-group dataalumnos__list-group">
                            {alumno.alumnos.map(info => {
                                return(
                                    <DataAlumnosList 
                                        name={info.name}
                                        lastname={info.lastname}
                                        id={info.id}
                                        handleDeleteProperty={handleDeleteProperty}
                                        trashoption={trashoption}
                                    />
                                )
                            })}
                       </ul>
                    </div>
                </div>
                )}
        })}
    </>
  )}

