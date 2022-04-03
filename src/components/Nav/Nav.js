import './Nav.scss';
import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <Link className='nav__logo-link' to="/">
                    <img className='nav__logo' src={logo} alt="scafit logo" />
                </Link>
                <button className='nav__menu' onClick={toggleMenu}>
                    <img className='nav__menu-image' src={menu} alt="open the menu" />
                </button>
                <nav className={`nav__list ${menuStatus ? 'nav__list--closed' : 'nav__list--open'}`}>
                    <NavLink className='nav__list-item' activeClassName='nav__list-item--active' exact to='/'>Home</NavLink>
                    <Link className='nav__list-item' to='/#features'>Features</Link>
                    <Link className='nav__list-item' to='/#contact'>Contact</Link>
                    <NavLink className='nav__list-item' activeClassName='nav__list-item--active' to='/editor'>Editor</NavLink> 
                </nav>
            </section>
        </header>
    )
}

export default Nav