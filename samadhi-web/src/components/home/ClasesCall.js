import React from 'react'
import { Link } from 'react-router-dom'
import { yogaImages } from '../../helpers/yogaImages'

export const ClasesCall = () => {
  return (
    <div className='clasescall__back'>
        <div className='container clasescall__container'>

            <div className='row clasescall__row1'>
                <div className='col-6'>
                    <h3 className='clasescall__title'>Empeza a practicar!</h3>
                    <p className='clasescall__text'>Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex
                    Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex
                    Proident culpa cupidatat officia anim veniam ad consequat aliqua ea tempor laboris incididunt ex.</p>
                </div>

                <div className='col-6 clasescall__divimg'>
                    <img className="card-img-top clasescall__img" src={ yogaImages(`./stretch3.png`) } alt="clases" />
                </div>
            </div>

            <div className='row clasescall__row2'>
                <div className='col-4'>
                    <div className="card clasescall__card" style={{width: '18rem'}}>
                        <img className="card-img-top clasescall__img-card" src={ yogaImages(`./logo.png`) } alt="logo" />
                        <div className="card-body">
                            <h5 className="card-title clasescall__card-title">Card title</h5>
                            <p className="card-text clasescall__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-4'>
                    <div className="card clasescall__card" style={{width: '18rem'}}>
                        <img className="card-img-top clasescall__img-card" src={ yogaImages(`./logo.png`) } alt="logo" />
                        <div className="card-body">
                            <h5 className="card-title clasecalls__card-title">Card title</h5>
                            <p className="card-text clasescall__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className='col-4'>
                    <div className="card clasescall__card" style={{width: '18rem'}}>
                        <img className="card-img-top clasescall__img-card" src={ yogaImages(`./logo.png`) } alt="logo" />
                        <div className="card-body">
                            <h5 className="card-title clasescall__card-title">Card title</h5>
                            <p className="card-text clasescall__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Link to='/clases' style={{ textDecoration: 'none' }}>
                <button className='clasescall__btn btn btn-green'>VER MAS</button>
            </Link>
        </div>
    </div>
  )
}
