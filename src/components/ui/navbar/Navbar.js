import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        //vamos a la pantalla de login, sobreescribiendo la url actual del history, para que si va para atrás no vaya a esta ruta, como ruta anterior
        navigate('/login' ,{ replace:true });
    };
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({isActive}) => 'nav-item nav-link'+ (isActive ? ' active': '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => 'nav-item nav-link'+ (isActive ? ' active': '') }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <span className="nav-item nav-link text-info">Marcos JRS</span>
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}