import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Dojo Blog</h1>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <NavLink to='/' className='navbar__link'>
                        Home
                    </NavLink>
                </li>
                <li className='navbar__item'>
                    <NavLink to='/create' className='navbar__link'>
                        New Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
