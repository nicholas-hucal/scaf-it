import React from 'react';
import './Input.scss';

const Input = ({label, type, value, name, placeholder, onChange}) => {
  return (
      <label className='input'>
          {label}
          <input className='input__field' type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
      </label>
  )
}

export default Input