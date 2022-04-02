import './Button.scss';

const Button = ({text, onClick, mod}) => {
  return (
    <button className={`button${` button--${mod}`}`} onClick={onClick}>
      <div className='button__triangle button__triangle--left'></div>
      <div className='button__triangle button__triangle--right'></div>
      {text}
    </button>
  )
}

export default Button