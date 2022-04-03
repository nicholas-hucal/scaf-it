import './Nav.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import logo from '../../assets/logos/logo.png';
import menu from '../../assets/icons/grip-lines.svg';

const Nav = () => {

    const [menuStatus, setMenuStatus] = useState(true);

    const toggleMenu = () => {
        setMenuStatus(prev => !prev)
    }

    return (
        <header className='nav'>
            <section className='nav__container'>
                <HashLink smooth className='nav__logo-link' to="/#home">
                    <img className='nav__logo' src={logo} alt="scafit logo" />
                </HashLink>
                <button className='nav__menu' onClick={toggleMenu}>
                    <img className='nav__menu-image' src={menu} alt="open the menu" />
                </button>
                <nav className={`nav__list ${menuStatus ? 'nav__list--closed' : 'nav__list--open'}`}>
                    <NavHashLink smooth className='nav__list-item' activeClassName='nav__list-item--active' exact to='#home' onClick={toggleMenu}>Home</NavHashLink>
                    <NavHashLink smooth className='nav__list-item' activeClassName="nav__list-item--active" to='#features' onClick={toggleMenu}>Features</NavHashLink>
                    <NavHashLink smooth className='nav__list-item' activeClassName="nav__list-item--active" to='#contact' onClick={toggleMenu}>Contact</NavHashLink>
                    <NavLink className='nav__list-item' activeClassName='nav__list-item--active' to='/editor' onClick={toggleMenu}>Editor</NavLink>
                </nav>
            </section>
        </header>
    )
}

export default Nav