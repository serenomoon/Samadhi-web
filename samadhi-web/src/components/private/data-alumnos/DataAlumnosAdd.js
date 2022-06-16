import React from 'react'
import { Form } from 'react-bootstrap'
import { HomeNav } from '../../ui/HomeNav'

export const DataAlumnosAdd = () => {
  return (
    <>
        <HomeNav />
        <div className='container mb-5'>
            <div className='clases__text mt-5'>
                <h4 className='clases__h4'>SAMADHI STUDIO</h4>
                <h1 className='clases__h1'>Nuevo Alumno</h1>
                <hr className='clases__hr'></hr>
            </div>

            <Form className='contacto__form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Direccion" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Teléfono" />
                </Form.Group>

                <Form.Select aria-label="Default select example">
                  <option>Clase</option>
                  <option value="1">Yoga</option>
                  <option value="2">Sniping</option>
                  <option value="3">Sparring</option>
                </Form.Select>

                <button className='btn btn-green mt-4' type="submit">
                    Añadir
                </button>
            </Form>
         </div>
    </>
  )
}
