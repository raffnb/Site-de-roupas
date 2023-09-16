import React from 'react'
import dncFrom  from  '../../assets/icon.svg';
import "./index.scss";
import cartlogo from "../../assets/carrinho.svg"


const HeaderMenu = () => {
  return (
<header className='header-menu'>
<img src={dncFrom} alt="logo" className="header-menu__logo" />
<ul>
  <li>Home</li>
  <li>Novidades</li>
  <li>Feminino</li>
  <li>Masculino</li>
  <li>Atendimento</li>
</ul>
<div className="header-menu__cart-shop">
  <h1>Meu carrinho</h1>
  <img src={cartlogo} alt="cartLogo" />
</div>

</header>
  )
}

export default HeaderMenu