import '../css/faq.css';
import arrowIcon from '../imgs/icon-pergunta.svg';

function Question({ question, answer, isOpen, onClick }) {
    return ( 
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <div className="question-title">
                <h4 className="pergunta">{question}</h4>
                <img 
                    src={arrowIcon} 
                    alt="Ícone de seta" 
                    className="arrow" 
                />
            </div>
            <div className="faq-resposta resposta">
                {answer}
            </div>
        </div>
    );
}

export default Question;
