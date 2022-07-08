import React, { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { Form } from 'react-bootstrap';
import { todaydate, todaytime } from '../../../helpers/dateAndTime';
import { HomeNav } from '../../ui/HomeNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetInfo } from '../../../hooks/useGetInfo';
import { yogaImages } from '../../../helpers/yogaImages';
const axios = require('axios');


export const DataAlumnosActualizar = () => {

    const tipoclase = "clases";
    const clasesdata = useGetInfo(tipoclase);
    const navigate = useNavigate();

    const params = useParams();

 
    const [url, setUrl] = useState(`http://127.0.0.1:8000/api/alumnosdata/${params.id}/`);
    const [respuestaAPI, setRespuestaAPI] = useState({});
   
    useEffect(() => {
      const consultaAPI = async () => {
        const consulta = await axios({ url });
        const data = consulta.data.data
        const clases = data.attributes
        setRespuestaAPI(clases);
      };
      consultaAPI();
    },[]);

    const { name, lastname, email, address, telephone, clase, date, time  } = respuestaAPI;


    const handleInputChange = ({target}) => {

        setRespuestaAPI({
            ...respuestaAPI,
            [ target.name ]: target.value
        })
    }
      
    const handleSubmit = (data) => {
        data.preventDefault();
        let form_data = new FormData();
        form_data.append('name', name);
        form_data.append('lastname', lastname);
        form_data.append('email', email);
        form_data.append('address', address);
        form_data.append('telephone', telephone);
        form_data.append('clase', clase);
        form_data.append('date', todaydate);
        form_data.append('time', todaytime);
        let url = `http://127.0.0.1:8000/api/alumnosdata/${params.id}/`;

        axios.put(url, form_data)
            .then(res => {
                console.log(res.request.status);
                console.log(res.data);
            })
            .catch(err => console.log(err));
        navigate(-1);
          
  };


  if (Object.keys(respuestaAPI).length === 0) {
    return <img src={ yogaImages(`./logo.svg`) } className="loading__loading img-fluid animate__animated animate__flash" alt='logo'/>;
  } else {
  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nuevo Alumno</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        name='name'
                        autoComplete='off' 
                        value={name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Apellido"
                        name='lastname'
                        autoComplete='off' 
                        value={lastname}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name='email'
                        autoComplete='off'
                        value={email}
                        onChange={handleInputChange} 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Direccion"
                        name='address'
                        autoComplete='off' 
                        value={address}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Teléfono"
                        name='telephone'
                        autoComplete='off'
                        value={telephone}
                        onChange={handleInputChange} 
                    />
                </Form.Group>

                <Form.Select 
                    aria-label="Clase"
                    onChange={handleInputChange}
                    value={clase}
                    name="clase"
                    >
                    <option>Clase</option>
                  {clasesdata.data.map( clases =>{
                     return(
                         <option value={clases.title}>{clases.title}</option>
                     )
                  })}
                </Form.Select>

                

                <button className='btn btn-green mt-4' type="submit">
                    Actualizar
                </button>
            </Form>
         </div>
    </>
  )
}
}
