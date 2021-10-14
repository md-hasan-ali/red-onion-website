import React from 'react';
import logo from '../../images/logo2.png'
import './header.css'

const Header = () => {
    return (
        <div className='container py-4'>
            <div className="row align-items-center">
                <div className="col-md-2">
                    <div className="logo-img">
                        <img className='img-fluid' src={logo} alt="" />
                    </div>
                </div>
                <div className="col-md-10 me-auto">
                    <nav>
                        <ul>
                            <li><a href="/"><i class="fas fa-cart-plus"></i></a></li>
                            <li><a href="/">Login</a></li>
                            <li><a className='signup-btn' href="/">SignUp</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;