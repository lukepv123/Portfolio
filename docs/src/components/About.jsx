import '../css/about.css'
import Label from '../components/Label.jsx'
import Account from '../components/Account.jsx'

import fotoAbout from '../imgs/foto-about.jpg'
import iconeLinkedin from '../imgs/icon-linkedin.svg'
import iconeGithub from '../imgs/icon-github.svg'
import iconeBehance from '../imgs/icon-behance.svg'

import iconeExperiencia from '../imgs/icon-experiencia.svg'
import iconeHtml from '../imgs/icon-html.svg'
import iconeDesign from '../imgs/icon-interfaces.svg'
import iconeReact from '../imgs/icon-react.svg'
import iconeDev from '../imgs/icon-frontend.svg'
import iconeJavascript from '../imgs/icon-javascript.svg'


function About() {
    return (
        <section className="s-about" id="quem-sou-eu">
            <div className="container">
                <img src={fotoAbout} alt="Foto minha"/>
                <div className="content">
                    <h5 >Muito prazer 👋🏻</h5>
                    <div className="about-title">
                        <h1>Felipe Sunakozawa</h1>
                        <h2>Desenvolvedor front-end & UI/UX Designer</h2>
                    </div>
                    <p >Estudo Sistemas de Informação e atuo há 1 ano com Front-end e UI/UX Design. Minha experiência me permite unir código e design para transformar ideias em interfaces digitais eficientes, claras e responsivas. Tenho como foco evoluir continuamente meus processos e conhecimentos em tecnologias como React e Next.js, sempre com o objetivo de criar soluções que fortalecem a presença digital de marcas e negócios.</p>
                    <div className="social-content">
                        <div className="social">
                            <Account
                            icon={iconeLinkedin}
                            titulo="Felipe Sunakozawa"
                            url="https://www.linkedin.com/in/felipesunakozawa"
                            />
                            <Account
                            icon={iconeGithub}
                            titulo="/felipekenzoo"
                            url="https://github.com/felipekenzoo"
                            />
                            <Account
                            icon={iconeBehance}
                            titulo="/felipekenzo"
                            url="https://www.behance.net/felipekenzo"
                            />
                            </div>
                    </div>
                    <div className="grid-labels">
                            <Label
                            icon={iconeExperiencia}
                            text="2 anos de experiência"
                           />
                            <Label
                            icon={iconeDev}
                            text="Desenvolvedor Front-end"
                           />
                            <Label
                            icon={iconeDesign}
                            text="UI/UX Designer"
                           />
                            <Label
                            icon={iconeReact}
                            text="Experiência com React"
                           />
                            <Label
                            icon={iconeJavascript}
                            text="Conhecimentos em JavaScript"
                           />
                            <Label
                            icon={iconeHtml}
                            text="HTML e CSS"
                           />
                    </div>
                </div>
                </div>
        </section>
    )
}

export default About;