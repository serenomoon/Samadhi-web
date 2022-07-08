import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { Form } from 'react-bootstrap'
import { HomeNav } from '../../ui/HomeNav'
import { todaydate, todaytime } from '../../../helpers/dateAndTime'
import { useNavigate } from 'react-router-dom'
const axios = require('axios');


export const DataNoticiasAdd = () => {

    const navigate = useNavigate();

    const [ datos, handleInputChange, reset ] = useForm({
            title: '',
            mensaje: '',
            date: '',
            time: ''
        }
      );
    
    const [uploadimg, setUploadimg] = useState(null)
    const { title, mensaje } = datos;
      

    const handleSubmit = (data) => {
        data.preventDefault();
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('mensaje', mensaje);
        form_data.append('date', todaydate);
        form_data.append('time', todaytime);
        form_data.append('uploadimg', uploadimg);
        let url = 'http://127.0.0.1:8000/api/noticiasdata/';
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
          .catch(err => console.log(err))
        navigate(-1);
  };


  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nueva Noticia</h1>
                <hr className='clases__hr'></hr>
            </div>
            

            <Form className='contacto__form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        placeholder="Titulo"
                        name='title'
                        autoComplete='off' 
                        value={title}
                        onChange={handleInputChange}
                     />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Mensaje"
                        name='mensaje'
                        autoComplete='off' 
                        value={mensaje}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Selecciona una imagen</Form.Label>
                    <Form.Control
                        type="file"
                        name='uploadimg'
                        onChange={(e)=>setUploadimg(e.target.files[0])}
                    />
                </Form.Group>

                <button className='btn btn-green mt-4' type="submit">
                    Añadir
                </button>
            </Form>
         </div>
    </>
  )
}
