import { useEffect, useState } from 'react';
import { getAlumnos, getAlumnosId, getClases, getClasesId, getFacilitadores, getFacilitadoresId, getNoticias, getNoticiasId } from '../helpers/getInfo';


export const useGetInfo = (tipo, id='') => {
    
    const [state, setState] = useState({
        data: []
    });


    useEffect(()=> {
        if(tipo === "alumnos"){
            getAlumnos()
            .then( info => {
                  setState({
                    data: info
                  })
            })

        } else if(tipo === "noticias"){
            getNoticias()
            .then( info => {
                  setState({
                    data: info
                  })         
            })

        } else if(tipo === "clases"){
            getClases()
            .then( info => {
                  setState({
                    data: info
                  })         
            })

        } else if(tipo === "facilitadores"){
            getFacilitadores()
            .then( info => {
                  setState({
                    data: info
                  })         
            })

        }  else if(tipo === "alumnosid"){
          getAlumnosId(id)
          .then( info => {
                setState({
                  data: info
                })        
          })
      } else if(tipo === "facilitadoresid"){
        getFacilitadoresId(id)
        .then( info => {
              setState({
                data: info
              })         
        })
    } else if(tipo === "clasesid"){
      getClasesId(id)
      .then( info => {
            setState({
              data: info
            })         
      })
  } else if(tipo === "noticiasid"){
    getNoticiasId(id)
    .then( info => {
          setState({
            data: info
          })         
    })
}

        
    }, []);

    return state;
}