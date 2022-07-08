import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const DataAlumnosList = ({trashoption, name, lastname,id,handleDeleteProperty}) => {

  return (
    <>
        <Container className='mt-1'>
            
            <Row>
                <Col md={4}>{name} {lastname}</Col>
                <Col className='dataalumnos__col' md={{ span: 4, offset: 4 }}>
                    <Link to={"/data/alumnos-ver/" + id}>
                        <button className='btn btn-green'>VER</button>
                    </Link>

                    {trashoption === true 
                        ?
                          <button className='btn btn-red' onClick={e => handleDeleteProperty(id)}><i data-fa-symbol="delete" class="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                    }
                </Col>
            </Row>    
  
        </Container>
    </>
  )
}
