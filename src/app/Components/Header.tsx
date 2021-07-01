import React from 'react';
import {BrowserRouter , Link} from 'react-router-dom';

export const Header  = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <BrowserRouter>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Product">Product</Link>
                    </li>
                </ul>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Header;