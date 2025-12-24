import '../css/processo.css';

function CardProcesso({ img, titulo, texto, numero}) {
  return (
    <div className="card-processo">
    <span>{numero}</span>
      <div className="content">
        <img src={img} alt={titulo} />
        <h3>{titulo}</h3>
      </div>
      <p>{texto}</p>
    </div>
  );
}

export default CardProcesso;