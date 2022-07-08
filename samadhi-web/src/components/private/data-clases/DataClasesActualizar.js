import React, { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { Form } from 'react-bootstrap';
import { todaydate, todaytime } from '../../../helpers/dateAndTime';
import { HomeNav } from '../../ui/HomeNav';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetInfo } from '../../../hooks/useGetInfo';
import { yogaImages } from '../../../helpers/yogaImages';
const axios = require('axios');


export const DataClasesActualizar = () => {

    // const tipoclase = "clases";
    // const clasesdata = useGetInfo(tipoclase);
    const navigate = useNavigate();

    const params = useParams();

 
    const [url, setUrl] = useState(`http://127.0.0.1:8000/api/noticiasdata/${params.id}/`);
    const [respuestaAPI, setRespuestaAPI] = useState({});
    const [uploadimg, setUploadimg] = useState(null);
   
    useEffect(() => {
      const consultaAPI = async () => {
        const consulta = await axios({ url });
        const data = consulta.data.data
        const clases = data.attributes
        setRespuestaAPI(clases);
      };
      consultaAPI();
    },[]);

    const { title, mensaje, date, time } = respuestaAPI;


    const handleInputChange = ({target}) => {

        setRespuestaAPI({
            ...respuestaAPI,
            [ target.name ]: target.value
        })
    }
      
    const handleSubmit = (data) => {
        data.preventDefault();
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('mensaje', mensaje);
        form_data.append('date', todaydate);
        form_data.append('time', todaytime);
        form_data.append('uploadimg', uploadimg);
        let url = `http://127.0.0.1:8000/api/noticiasdata/${params.id}/`;

        axios.put(url, form_data)
          .then(res => {
              console.log(res.request.status);
              console.log(res.data);
          })
          .catch(err => console.log(err))
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
                <h1 className='clases__h1'>Actualizar Clase</h1>
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
                    Actualizar
                </button>
            </Form>
         </div>
    </>
  )
}
}
