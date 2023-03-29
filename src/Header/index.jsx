import React from 'react'
import "../Header/style.css"
import logo from '../Assets/logo-ice-header.svg'

function Header() {
  return (
    <header className='titulo'><img src={logo} alt="logo da ice educação" /></header>
  )
}

export default Header