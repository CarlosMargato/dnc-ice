import React from 'react'
import "../Footer/style.css"
import logo from '../Assets/logo-ice-footer.svg'

function Footer() {
  return (
    <footer className='footer'><img src={logo} alt="logo da ice educação" /><p>ICE Educação © <p>Copyright 2022 Todos os direitos reservados</p></p></footer>
  )
}

export default Footer