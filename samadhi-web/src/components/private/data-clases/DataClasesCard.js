import React from 'react'
import { yogaImages } from '../../../helpers/yogaImages'
import { Link } from 'react-router-dom'

export const DataClasesCard = ({clases}) => {
  return (
    <>
        <div className='col-4 clases__col animate__animated animate__fadeIn'>
            <div className="card clases__card" style={{width: '18rem'}}>
                <img className="card-img-top clases__img-card" src={ yogaImages(`./clasesexample1.jpg`) } alt="logo" />
                <div className="card-body datanoticias__card-text">
                    <h5 className="card-title clases__card-title">Card title</h5>
                    <p className="card-text clases__card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="card-text datanoticias__card-buttons">
                        <Link to='/news' style={{textDecoration: 'none'}}>
                          <button className='btn btn-green'>VER</button>
                        </Link>
                        {clases === true 
                        ?
                          <button className='btn btn-red'><i data-fa-symbol="delete" class="fas fa-trash fa-fw"></i></button>
                        :
                        <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
