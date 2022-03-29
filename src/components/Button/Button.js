import './Button.scss';

const Button = ({text, onClick, mod}) => {
  return (
    <button className={`button${` button--${mod}`}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button