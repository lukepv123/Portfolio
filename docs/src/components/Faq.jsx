import { useState } from "react";
import Question from "./Question.jsx";
import '../css/faq.css'

const faqData = [
    {
        question: "Você atua com design ou desenvolvimento?",
        answer: "Eu atuo tanto com design de interfaces quanto com desenvolvimento front-end. Isso me permite criar projetos completos, desde a concepção visual até a implementação no código."
    },
    {
        question: "Quais tecnologias você usa?",
        answer: "Utilizo principalmente HTML, CSS, JavaScript e React, além de ferramentas de design como Figma. Trabalho sempre com boas práticas de componentização, responsividade e usabilidade."
    },
    {
        question: "Quanto tempo leva um projeto?",
        answer: "O prazo varia de acordo com a complexidade. Projetos menores podem levar de 1 a 2 semanas, enquanto projetos mais completos podem exigir algumas semanas a mais. O tempo exato é definido junto com o cliente no início."
    },
    {
        question: "Qual é o investimento para um projeto?",
        answer: "O valor depende do escopo, prazos e nível de personalização. Por isso, cada projeto recebe uma proposta específica após entender as necessidades e objetivos do cliente."
    },
    {
        question: "Como funciona o seu processo de trabalho?",
        answer: "Passamos por quatro etapas principais: pesquisa, design, desenvolvimento e entrega. Isso garante clareza, eficiência e qualidade em cada fase."
    },
    {
        question: "Posso solicitar alterações depois que o projeto for concluído?",
        answer: "As alterações são feitas durante o andamento do projeto, em até 1 a 2 rodadas de revisão já previstas no processo. Após a conclusão, não realizo mudanças, já que todo o trabalho segue um escopo definido desde o início para garantir qualidade e clareza em cada entrega."
    },
];

function Faq() {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <>
            <section className="s-faq" id="faq">
                <div className="container">
                        <div className="left">
                            <div className="top">
                                <h1>Perguntas<br/> frequentes</h1>
                                <p>Separei aqui as principais dúvidas que clientes costumam ter sobre meu trabalho, prazos e forma de atuação. Assim você já entende como trabalho antes mesmo de entrarmos em contato.</p>
                            </div>
                            <div className="bottom">
                                <h2>Ainda com dúvidas?</h2>
                                <p>Não encontrou a resposta para sua pergunta?<br/>Você pode entrar em contato comigo pelo meu e-mail, vamos discutir sobre seu projeto!</p>
                                <a href="http://wa.me/5519996840392" target="_blank" rel="noopener noreferrer">Me envie uma mensagem</a>
                            </div>
                        </div>
                        <div className="right">
                            {faqData.map((faq, index) => (
                                <Question
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openQuestionIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                </div>
            </section>

        </>
    )
}

export default Faq;