import '../css/case.css'
import Label from '../components/Label.jsx'
import iconBehance from '../imgs/icon-case-behance.svg'
import iconGithub from '../imgs/icon-case-github.svg'


function Case({nome, descricao, imagem, behance, github, labels = [], reverse = false}) {
    return (
        <>
        <div className={`case ${reverse ? 'case-reverse' : ''}`}>
                <img className="case-img" src={imagem} alt={nome} />
                <div className="content-case">
                    <h1>{nome}</h1>
                    <div className="grid-labels">
                        {labels.map((label, index) => (
                            <Label key={index} icon={label.icon} text={label.text} />
                        ))}
                    </div>
                    <p>{descricao}</p>
                    <div className="links">
                        {behance && (
                            <a href={behance} target="_blank" rel="noopener noreferrer">
                                <img src={iconBehance} alt="Ícone do Behance" /> Ver no Behance
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <img src={iconGithub} alt="Ícone do GitHub" /> Ver no Github
                            </a>
                        )}
                    </div>
                </div>
        </div>
        </>
    )
}

export default Case;