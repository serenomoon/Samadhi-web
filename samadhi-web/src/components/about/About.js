import React from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'
import { Foot } from '../home/Foot'
import { HomeNav } from '../ui/HomeNav'

export const About = () => {
  return (
    <>
      <HomeNav />
      <div className='about__clase'>
        <div className='container'>
          <div className='about__text'>
            <h4 className='about__h4'>SAMADHI STUDIO</h4>
            <h1 className='about__h1'>Facilitadores</h1>
            <hr className='about__hr'></hr>
            <p className='about__p'>Et velit cillum minim nulla officia irure nulla id. Nulla commodo id aliqua magna aliqua veniam aliqua officia cupidatat.</p>
          </div>

          <div className='about__tipo-clase'>
          
            <div className='row'>
              <h1>Yoga</h1>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/julieta.jpg`) } alt="logo" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title about__card-title">Julieta Fernández</h5>
                        <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                        <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador1.jpg`) } alt="logo" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title about__card-title">El Capitan</h5>
                        <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador2.jpg`) } alt="logo" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title about__card-title">Elsa Lame</h5>
                        <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador5.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Washington Ruben</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
            </div>


            <div className='row'>
              <h1>Spinning</h1>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador3.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Lucas Uncle</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador4.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Hernan Man</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
            </div>


            <div className='row'>
              <h1>Yoga Rustico</h1>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador5.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Card title</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
            </div>


            <div className='row'>
              <h1>Stretching</h1>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador6.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Card title</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador5.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Card title</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
              </div>
              <div className='col-4 about__col animate__animated animate__fadeIn'>
                  <div className="card about__card" style={{width: '18rem'}}>
                    <Link to='/facilitador'>
                      <img className="card-img-top about__img-card" src={ yogaImages(`./facilitadores/facilitador2.jpg`) } alt="logo" />
                    </Link>  
                      <div className="card-body">
                          <h5 className="card-title about__card-title">Card title</h5>
                          <p className="card-text about__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
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

