import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';

const Nav = () => {
    return (
        <header className='nav'>
            <section className='nav__container'>
                <Link className='nav__logo-link' to="/">
                    <img className='nav__logo' src={logo} alt="scafit logo" />
                </Link>
                <nav className='nav__list'>
                    <NavLink className='nav__list-item' activeClassName='nav__list-item--active' exact to='/'>Home</NavLink>
                    <Link className='nav__list-item' to='/'>Features</Link>
                    <NavLink className='nav__list-item' activeClassName='nav__list-item--active' to='/editor'>Editor</NavLink>
                    <Link className='nav__list-item' to='/'>Contact</Link>
                </nav>
            </section>
        </header>
    )
}

export default Nav