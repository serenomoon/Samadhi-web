import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const DataAlumnosList = ({alumnos}) => {
  return (
    <>
        <Container>
            
            <Row>
                <Col md={4}>Ricardo Rubio</Col>
                <Col className='dataalumnos__col' md={{ span: 4, offset: 4 }}>
                    <Link to='/data/alumnos-ver'>
                        <button className='btn btn-green'>VER</button>
                    </Link>

                    {alumnos === true 
                        ?
                          <button className='btn btn-red'><i data-fa-symbol="delete" class="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                    }
                </Col>
            </Row>    
  
        </Container>
    </>
  )
}
