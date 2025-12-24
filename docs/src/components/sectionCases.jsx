import Case from './Case.jsx'
import '../css/case.css'
import imagemGreenTech from '../imgs/case-greentech.jpg'
import imagemKopu from '../imgs/case-kopu.jpg'
import imagemKenzo from '../imgs/case-kenzo.jpg'

import iconeCss from '../imgs/icon-case-css.svg'
import iconeFigma from '../imgs/icon-case-figma.svg'
import iconeReact from '../imgs/icon-case-react.svg'
import iconeJavascript from '../imgs/icon-case-js.svg'
function SectionCases() {
    const casesData = [
        {
            nome: "GreenTech",
            descricao: "A GreenTech nasceu como um projeto acadêmico, mas se transformou em uma verdadeira imersão prática. Fui responsável pelas interfaces e pela experiência do usuário. Além do design, também participei do desenvolvimento front-end, levando o conceito para a realidade com código. O resultado foi um sistema funcional que uniu aprendizado acadêmico e aplicação prática.",
            imagem: imagemGreenTech,
            behance: "https://www.behance.net/gallery/229846519/GreenTech-Marketplace-de-Energia-Solar",
            github: "https://github.com/DaviMarqs/green-tech-II",
            labels: [
                { icon: iconeFigma, text: 'Figma' },
                { icon: iconeReact, text: 'React' },
                { icon: iconeCss, text: 'CSS3' },
                { icon: iconeJavascript, text: 'TypeScript' },
            ],
            reverse: false
        },
        {
            nome: "Kenzo Studio",
            descricao: "Este projeto começou literalmente em uma folha em branco. Desenhei as primeiras ideias no Figma, refinei cada tela e depois transformei tudo em código com React. Trabalhei com componentização, props e boas práticas para criar algo escalável, bonito e funcional. Meu objetivo era provar que é possível unir design e desenvolvimento em uma experiência completa e fluida.",
            imagem: imagemKenzo,
            behance: null,
            github: "https://github.com/felipekenzoo/portfolio-kenzo",
            labels: [
                { icon: iconeFigma, text: 'Figma' },
                { icon: iconeReact, text: 'React' },
                { icon: iconeCss, text: 'CSS3' },
                { icon: iconeJavascript, text: 'JavaScript' }
            ],
            reverse: true
        },
        {
            nome: "Kopu Brindes",
            descricao: "A Kopu Brindes precisava de um site que refletisse sua força no mercado. Meu foco foi tornar a navegação intuitiva e a busca por produtos muito mais rápida. O redesign trouxe clareza visual, organização e uma jornada de compra mais fluida para o usuário.",
            imagem: imagemKopu,
            behance: "https://www.behance.net/gallery/224331451/Kopu-Brindes-Ecommerce-UI-Redesign",
            github: null,
            labels: [
                { icon: iconeFigma, text: 'Figma' },
            ],
            reverse: false
        }
    ];
    
    return (
        <section className="s-cases" id="cases">
            <div className="container">
                <div className="cases-title">
                    <h2>Cases de sucesso</h2>
                    <p>Meus melhores projetos • 2024 ~ 2025</p>
                </div>
                {casesData.map((caseItem, index) => (
                    <Case
                        key={index}
                        nome={caseItem.nome}
                        descricao={caseItem.descricao}
                        imagem={caseItem.imagem}
                        behance={caseItem.behance}
                        github={caseItem.github}
                        labels={caseItem.labels}
                        reverse={caseItem.reverse}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionCases;