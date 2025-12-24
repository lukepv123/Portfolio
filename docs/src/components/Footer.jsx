import logoFooter from '../imgs/logo-footer.svg'
import '../css/footer.css'


function Footer () {
    return (
        <footer>
            <div className="container">
                <img src={logoFooter} alt="Logo do footer" />
                <div className="texts">
                    <p>Projeto por Felipe Kenzo // Codificado em React</p>
                    <p>Todos os direitos reservados © 2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;