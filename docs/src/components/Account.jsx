import '../css/acount.css'


function Account({icon, titulo, url, ariaLabel}) {
    return(
        <a href={url} className="account-item" target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
            <img src={icon} alt={titulo}/>
            <h5>{titulo}</h5>
        </a>
    )
} 

export default Account;