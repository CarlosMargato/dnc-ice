import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import teacherTop from '../Assets/professoraTop.png'
import teacherMiddle from '../Assets/professorameio.svg'
import teacherBottom from '../Assets/professorbaixo.svg'

function Landing() {
  return (
    <>
    <Header/>
    <div>
        <div>
        <p>Se prepare para o Novo Ensino Médio.</p>
        <p>A Ice Educação quer te preparar para esse novo desafio.</p>
        <p>Daremos uma aula gratuita pra você entender como será o Novo Ensino Médio, dicas pra se preparar e como afetará a forma de desenvolver aulas para os alunos.</p>
        </div>
        <div>
            <button type="submit">Participe da nossa Aula Gratuita</button>
        </div>
        <div>
            <img src={teacherTop} alt="" />
        </div>
    </div>
    <div className='quadradoRoxo'>
        <div>
            <div className='cuboLaranja'>
                <p>2023</p>
                <p>é o prazo máximo para as escolas iniciarem o novo ensino-médio</p>
            </div>
            <div className='cuboBranco'>
                <p>81%</p>
                <p>dos empregadores relatam dificuldade para encontrar  professores qualificados.</p>
            </div>
            <div className='cuboVerde'>
                <p>Nós estamos mudando isso!</p>
                <p>Com a ICE Educação, os professores terão todo o apoio pra os novos itinerários</p>
            </div>
        </div>
        <div>
            <p>Nós preparamos uma aula gratuita para os professores para o Novo Ensino Médio</p>
            <p>Somos um streaming de cursos para professores</p>
            <p>Nosso objetivo é trazer conteúdos voltado para leccionar e dar base para preparar aulas dinamicas e interressantes para os alunos</p>
        </div>
    </div>
    <div>
        <div>
            <p>PARA PROFESSORES</p>
            <p>Prepare-se para o Novo Ensino Médio</p>  
            <p>Participe de nossa aula totalmente gratuita para você entender sobre o novo ensino médio: suas necessidades, exigências e direcionamento</p>
        </div>
        <div>
            <button type="submit">Faça parte desse novo momento</button>
        </div>
        <div>
            <img src={teacherMiddle} alt="" />
        </div>
    </div>
    <div>
        <div>
            <img src={teacherBottom} alt="" />
        </div>
        <div>
            <p>PARA ESCOLAS</p>
            <p>Tenha uma equipe pronta para os novos requisitos</p>  
            <p>Com o nosso programa de treinmento para as eletivas alinhadas à BNCC, oferecemos aos professores do ensino médio a oportunidade de preparar para os novos requisitos do novo ensino médio</p>
        </div>
        <div>
            <button type="submit">Cadastre-se para aula gratuita</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Landing