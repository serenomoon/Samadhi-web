import React from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const Clases = () => {
  return (
    <>
      <HomeNav />
      <div className='clases__clase'>
        <div className='container'>
          <div className='clases__text'>
            <h4 className='clases__h4'>SAMADHI STUDIO</h4>
            <h1 className='clases__h1'>Tipos de Clases</h1>
            <hr className='clases__hr'></hr>
            <p className='clases__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>
          <div className='row'>
                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample1.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>

                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample2.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>

                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample3.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>

                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample4.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>
    
                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample5.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>
    
                  <div className='col-4 clases__col animate__animated animate__fadeIn'>
                      <div className="card clases__card" style={{width: '18rem'}}>
                          <img className="card-img-top clases__img-card" src={ yogaImages(`./clases.jpg`) } alt="logo" />
                          <div className="card-body">
                              <h5 className="card-title clases__card-title">Card title</h5>
                              <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <Link to='/clasesmas' style={{textDecoration: 'none'}}>
                                <button className='btn'>VER MAS</button>
                              </Link>
                          </div>
                      </div>
                  </div>

          </div>
        </div>
      </div>
      <Foot />
    </>
  )
}
