import { Link, NavLink } from 'react-router-dom';
import './Button.scss';

const Button = ({ to, type, text, onClick, tri, color }) => {
  if (type === 'anchor') {
    return (
      <a className={`button ${color ? `button--${color}` : ''}`} href={to}>
        <div className={`button__triangle button__triangle--left ${tri ? `button__triangle--${tri}` : ''}`}></div>
        <div className={`button__triangle button__triangle--right ${tri ? `button__triangle--${tri}` : ''}`}></div>
        {text}
      </a>
    )
  } else if (type === 'link') {
    return (
      <Link className={`button ${color ? `button--${color}` : ''}`} to={to}>
        <div className={`button__triangle button__triangle--left ${tri ? `button__triangle--${tri}` : ''}`}></div>
        <div className={`button__triangle button__triangle--right ${tri ? `button__triangle--${tri}` : ''}`}></div>
        {text}
      </Link>
    )
  } else if (type === 'nav-link') {
    return (
      <NavLink className={`button ${color ? `button--${color}` : ''}`} to={to}>
        <div className={`button__triangle button__triangle--left ${tri ? `button__triangle--${tri}` : ''}`}></div>
        <div className={`button__triangle button__triangle--right ${tri ? `button__triangle--${tri}` : ''}`}></div>
        {text}
      </NavLink>
    )
  } else {
    return (
      <button className={`button ${color ? `button--${color}` : ''}`} onClick={onClick}>
        <div className={`button__triangle button__triangle--left ${tri ? `button__triangle--${tri}` : ''}`}></div>
        <div className={`button__triangle button__triangle--right ${tri ? `button__triangle--${tri}` : ''}`}></div>
        {text}
      </button>
    )
  }
}

export default Button