import React from 'react'
import { Form } from 'react-bootstrap'
import { HomeNav } from '../../ui/HomeNav'

export const DataClasesAdd = () => {

  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nueva Clase</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Titulo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Selecciona una imagen</Form.Label>
                    <Form.Control
                      type="file"
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
