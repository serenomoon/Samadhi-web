import React from 'react'
import { useForm } from '../../../hooks/useForm'
import { Form } from 'react-bootstrap'
import { todaydate, todaytime } from '../../../helpers/dateAndTime'
import { useGetInfo } from '../../../hooks/useGetInfo'
import { HomeNav } from '../../ui/HomeNav'
const axios = require('axios');


export const DataAlumnosAdd = () => {

    const tipo = "clases";
    const { data } = useGetInfo(tipo);


    const [ datos, handleInputChange, reset ] = useForm({
            name: '',
            lastname: '',
            email: '',
            address: '',
            telephone: '',
            clase: '',
            date: '',
            time: ''
        }
      );

    const { name, lastname, email, address, telephone, clase } = datos;
      
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
        let url = 'http://127.0.0.1:8000/api/alumnosdata/';
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data' 
            },
        };
        axios.post(url, form_data, config)
            .then(res => {
                console.log(res.request.status);
                console.log(res.data);
            })
            .catch(err => console.log(err));
        reset();
  };

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
                  {data.map( clases =>{
                     return(
                         <option value={clases.title}>{clases.title}</option>
                     )
                  })}
                </Form.Select>
                

                <button className='btn btn-green mt-4' type="submit">
                    Añadir
                </button>
            </Form>
         </div>
    </>
  )
}
