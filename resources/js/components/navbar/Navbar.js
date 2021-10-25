import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            {/* Brand */}
            <Link className="navbar-brand mx-2 mx-lg-4" to="/">
                <i className="fa fa-sw fa-film"></i> Damuvis App
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-4" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Trending</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Trending Semanal</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Trending
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">De la Semana</a>
                        <a className="dropdown-item" href="#">Del día</a>
                        </div>
                    </li> */}
                </ul>
            </div>
        </nav>
      );
}
 
export default Navbar;