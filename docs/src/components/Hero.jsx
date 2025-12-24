import { useState, useEffect } from 'react';
import '../css/hero.css';
import '../css/button.css';
import fotoHero from '../imgs/foto-hero.jpg';

function Hero() {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayAfterTyping = 2000;

        const words = ["Desenvolvedor Front-End", "Designer de Interfaces"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId; 

        const type = () => {
            const currentWord = words[wordIndex % words.length];

            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                timeoutId = setTimeout(type, delayAfterTyping);
                return; 
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex++;
            }
            
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            timeoutId = setTimeout(type, speed);
        };

        type();

        return () => clearTimeout(timeoutId);

    }, []);

    return (
        <>
            <section className="s-hero">
                    <div class="background-blob-1"></div>
                    <div class="background-blob-2"></div>
                <div className="container">
                    <div className="title">
                        <h5>Hi, I'm <strong>Felipe Sunakozawa</strong> 👋🏻</h5>
                        <h1>{typedText}<span className="typing-cursor"> </span>
                        </h1>
                        <p>Do código ao design, aplico minha experiência em HTML, CSS, JavaScript e UI/UX para criar soluções digitais completas. Busco sempre o equilíbrio entre funcionalidade, estética e experiência, garantindo que cada projeto seja útil e envolvente.</p>
                        <a href="http://wa.me/5519996840392" target="_blank" rel="noopener noreferrer">Comece um projeto</a>
                    </div>
                    <div className="imagem"><img src={fotoHero} alt="Foto - Felipe Kenzo" /></div>
                </div>
            </section>
        </>
    );
}

export default Hero;