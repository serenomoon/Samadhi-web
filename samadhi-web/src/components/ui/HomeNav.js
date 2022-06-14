import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const HomeNav = () => {

    const { user, dispatch } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleLogout = () => {

        dispatch({
            type : types.logout
        })

        navigate('/', {
            replace: true
          });
    }




    return (
    <div className="row navbar__row">
        <div className="col-lg-4">
        </div>
        <div className="col-lg-4">
            <ul className="list-inline quicklinks mb-0 navbar__ul">
                <li className="list-inline-item">

                    <NavLink 
                            className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                            to="/"
                        >
                            Home
                    </NavLink>                    
                </li>

                <li className="list-inline-item">
                    <NavLink 
                            className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                            to="/clases"
                        >
                            Clases
                    </NavLink>                    
                </li>

                <li className="list-inline-item">
                    <NavLink 
                            className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                            to="/about"
                        >
                            About
                    </NavLink>                    
                </li>

                <li className="list-inline-item">
                    <NavLink 
                            className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                            to="/contacto"
                        >
                            Contacto
                    </NavLink>                    
                </li>

                {user.logged ? 
                    <li className="list-inline-item">
                        <NavLink 
                                className={ ({ isActive }) => 'nav-link navbar__link' + (isActive ? 'active' : '') } 
                                to="/alumnos"
                            >
                                Alumnos
                        </NavLink>                    
                    </li>

                :<></>}

            </ul>

        </div>

        {user.logged ?
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <ul className="list-inline quicklinks mb-0">
                    <li className="list-inline-item">
                        <span>{ user.name }</span>

                         <button 
                             className="navbar__link btn-menu"
                             onClick={ handleLogout }
                         >
                             Logout
                         </button>
                    </li>
                </ul>
            </div>
        :
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <ul className="list-inline quicklinks mb-0">
                    <li className="list-inline-item">
                        <Link to="/auth/login">
                            <button 
                                className="navbar__link btn-menu"
                            >
                                Login
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        }
    </div>
    
    
    )
}