import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import teacherTop from '../Assets/professoraTop.png'
import teacherMiddle from '../Assets/professorameio.svg'
import teacherBottom from '../Assets/professorbaixo.svg'
import "../Landing/style.css"
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className='displayBoxtop'>
        <div className='displayTextTop'>
            <p className='displayTitleTop'>Como lecionar Educação Financeira para alunos do Novo Ensino Médio?</p>
            <p className='displayResumeTop'>Daremos um material exclusivo pra você entender como lecionar Educação Financeira no Novo Ensino Médio, dicas de conteúdo programático, exercícios a serem ministrados e muito mais.</p>
            <button className='displayButton' type="submit" onClick={() =>navigate('/formulario')}>Cadastre-se já e receba o material</button>
        </div>
        <div>
            <img src={teacherTop} alt="" />
        </div>
    </div>
    <div className='displayCubo'>
       <div className='displayCuboLine'>
            <div className='cuboLaranja'>
                <p className='cubo2023'>2023</p>
                <p className='cuboText'>é o prazo máximo para as escolas iniciarem o novo ensino-médio</p>
            </div>
            <div className='cuboBranco'>
                <p className='cubo81'>81%</p>
                <p className='cuboText'>dos empregadores relatam dificuldade para encontrar  professores qualificados.</p>
            </div>
            <div className='cuboVerde'>
                <p className='cuboTitle'>Nós estamos mudando isso!</p>
                <p className='cuboText'>Ajudaremos os professores  para se prepararem para o novos itinerários do Novo Ensino Médio</p>
            </div>
        </div>
        <div className='displayCuboText'>
            <p className='displayCuboTitle'>Nós preparamos um material gratuito de Educação Financeira para os professores  do Novo Ensino Médio</p>
            <p className='displayCuboResume'>Somos um streaming de cursos para professores</p>
            <p className='displayCuboResume'>Nosso objetivo é trazer conteúdos voltado para leccionar e dar base para preparar aulas dinamicas e interressantes para os alunos</p>
        </div>
    </div>
    <div className='displayBoxMiddle'>
        <div className='displayTextMiddle'>
            <p className='displayTitleMiddle'>Conteúdo do material</p>
         
            <li className='displayTopic'>Filmes com temáticas sobre educação financeira, finanças e empreendedorismo</li>
            <li className='displayTopic'>Vida familiar e cotidiana</li>
            <li className='displayTopic'>Você é gastador ou poupador?</li>
            <li className='displayTopic'>Como utilizar livros de educação financeira em sala de aula</li>
           
      
            <button className='displayButton' type="submit" onClick={() =>navigate('/formulario')}>Cadastre-se e receba o material</button>

        </div>
        <div className='displayIMG'>
            <img src={teacherMiddle} alt="" />
        </div>
    </div>
    <div className='displayBoxBottom'>
        <div>
            <img src={teacherBottom} alt="" />
        </div>
        <div className='displayTextBottom'>
            <p className='displayForSchool'>PARA ESCOLAS</p>
            <p className='displayTitleBottom'>Sua equipe Docente pronta para o Novo</p>  
            <p className='displayResumeBottom'>Com o nosso programa de treinmento para as eletivas alinhadas à BNCC, oferecemos aos professores do ensino médio a oportunidade de preparar para os novos requisitos do novo ensino médio</p>

            <button className='displayButton'type="submit" onClick={() =>navigate('/formulario')}>Fale com nossos consultores</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Landing