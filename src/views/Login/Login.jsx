import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

const Login = () => {
  return (
<section className='login'>
  <Header/>
  <form className='login__form'>
    <h1>Acesse com seu login ou cadastre-se!</h1>
    <h2>você pode entrar com o seu CPF</h2>
    <div className="login_input-wraper">

      <label htmlFor="name"> Digite Seu CPF:  </label>
        <input type="text" id='name' className='login_input-name' placeholder='Nome Completo' />
      
        
      <label htmlFor="password"> Senha:  </label>
        <input type="text" id='password' className='login_input-password' placeholder=' *********' />
    
    </div>
    <button type='submit' className='btn'>
     <Link to={'/home'} className='btn__link'>Entrar</Link>
      </button>
  </form>
</section>
  )
}

export default Login;