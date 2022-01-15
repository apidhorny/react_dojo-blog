import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Dojo Blog</h1>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a href='/' className='navbar__link'>
                        Home
                    </a>
                </li>
                <li className='navbar__item'>
                    <a href='/create' className='navbar__link navbar__link--active'>
                        New Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
