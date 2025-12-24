import '../css/card-diferenciais.css'

function CardDiferenciais({imagem, titulo, texto}) {
    return(
        <div className="card-diferenciais">
            <img src={imagem} alt={titulo}/>
            <h5>{titulo}</h5>
            <p>{texto}</p>
        </div>
    )
}

export default CardDiferenciais;