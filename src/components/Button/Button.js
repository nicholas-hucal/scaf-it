import './Button.scss';

const Button = ({text, buttonHandler}) => {
  return (
    <button className='button' onClick={buttonHandler}>
        {text}
    </button>
  )
}

export default Button