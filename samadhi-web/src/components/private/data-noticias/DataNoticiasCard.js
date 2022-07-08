import React from 'react';
import { Link } from 'react-router-dom';

export const DataNoticiasCard = ({trashoption, title, mensaje, uploadimg, id, handleDeleteProperty}) => {
  return (
    <>
        <div className='col-4 clases__col animate__animated animate__fadeIn'>
            <div className="card clases__card" style={{width: '18rem'}}>
                <img className="card-img-top clases__img-card" src={uploadimg} alt="logo" />
                <div className="card-body datanoticias__card-text">
                    <h5 className="card-title clases__card-title">{title}</h5>
                    <p className="card-text clases__card-text">{mensaje}</p>
                    <div className="card-text datanoticias__card-buttons">
                        <Link to={"/data/noticias-ver/" + id} style={{textDecoration: 'none'}}>
                          <button className='btn btn-green'>VER</button>
                        </Link>
                        {trashoption === true 
                        ?
                          <button className='btn btn-red' onClick={e => handleDeleteProperty(id)}><i data-fa-symbol="delete" class="fas fa-trash fa-fw"></i></button>
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
