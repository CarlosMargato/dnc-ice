import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import professoraForm from '../Assets/professoraForm.svg'
import '../Formulario/style.css'
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className='fullForm'>
   
    <div className='displayBox'>
      <div>
        <img src={professoraForm} alt="" />
      </div>
      <div className='displayText'>
        <p className='title'>Cadastre-se e lhe enviaremos o informativo sobre Educação Financeira no Novo Ensino Médio</p>
        <p className='resume'>Prepare-se para o novo ensino médio com o material gratuito para te auxiliar a se preparar  na nova caminhada</p>
      </div>
        <form className="displayForm">
            <input
              type="text"
              name="nome"
              id="nome"
              className='InputForm'
              placeholder="Nome"
            />
          
            <input
              type="email"
              name="email"
              id="email"
              className='InputForm'
              placeholder="E-mail"
            />
       
            <input
              type="tel"
              name="telefone"
              id="telefone"
              className='InputForm'
              placeholder="(DDD) Telefone"
            />
       
            <input
              type="text"
              name="escola"
              id="escola"
              className='InputForm'
              placeholder="Escola/Colégio"
            />
          <button className='buttonQuero' type="submit" onClick={() =>navigate('/feito')}>Quero Participar!</button>
        </form>
    </div>
    
   
    </div>
     <Footer/>
     </>
  )
}

export default Formulario