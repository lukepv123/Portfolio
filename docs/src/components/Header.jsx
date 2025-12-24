import { useState } from 'react';
import '../css/header.css';
import logoHeader from '../imgs/logo-header.svg'


function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const closeMenu = () => {
        if (menuAberto) {
            setMenuAberto(false);
        }
    };

    return (
        <>
            <header>
                <div className="container">
                    <a href="/" aria-label="Página inicial">
                        <img src={logoHeader} alt="Logo do header" />
                    </a>
                    <button
                        className={`menu-hamburguer ${menuAberto ? 'aberto' : ''}`}
                        onClick={toggleMenu}
                        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuAberto}
                        aria-controls="menu-navegacao"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <nav id="menu-navegacao" className={menuAberto ? 'menu-aberto' : ''}>
                        <ul>
                            <li><a href="#quem-sou-eu" onClick={closeMenu}>Quem sou eu?</a></li>
                            <li><a href="#cases" onClick={closeMenu}>Cases</a></li>
                            <li><a href="#workflow" onClick={closeMenu}>Workflow</a></li>
                            <li><a href="#diferenciais" onClick={closeMenu}>Diferenciais</a></li>
                            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;