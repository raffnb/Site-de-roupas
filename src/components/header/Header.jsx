import React from 'react'
import dncFrom  from  '../../assets/icon.svg';
import "./index.scss";


const Header = () => {
  return (
    <div className='header'> 
      <img className='header__img' src={dncFrom} alt="logo" />
    </div>
  )
}

export default Header