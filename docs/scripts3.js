function filterProjects() {
    const filterValue = document.getElementById('tech-filter').value;
    const projects = document.querySelectorAll('.project-item');

    projects.forEach(project => {
        if (filterValue === 'all' || project.getAttribute('data-tech').includes(filterValue)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Toggle do menu hambúrguer
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

// Ao clicar no botão de menu, adiciona ou remove a classe 'active' para mostrar/esconder o menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Função para mudança de fundo ao rolar
function changeBackgroundColor() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var projectsGrid = document.getElementById("projects-grid");

    if (scrollPosition > 200) {
        projectsGrid.style.backgroundColor = "#3f8fc4"; // Cor de fundo quando rolar
    } else {
        projectsGrid.style.backgroundColor = "#ffffff"; // Cor original
    }
}

// Aplica a mudança de cor somente em dispositivos móveis (max-width: 768px)
window.onscroll = function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        // Somente para dispositivos móveis (telas pequenas)
        changeBackgroundColor();
    }
};


    // Acessa o elemento de áudio
    var audio = document.getElementById('background-music');

    // Define o volume (0.0 é mudo, 1.0 é o volume máximo)
    audio.volume = 0.05; // Ajuste o valor para a sua necessidade (0.0 a 1.0)


    // Você pode usar um evento para alterar o volume ou o tempo dinamicamente
    window.onload = function() {
        setTimeout(function() {
            audio.play(); // Garante que a música comece após o atraso
        }, 5000); // O valor 5000 é em milissegundos (5 segundos)
    };

    // Manter o áudio tocando enquanto a página estiver aberta
    window.onfocus = function() {
        // A música começa novamente caso o navegador perca o foco e depois retorne
        if (audio.paused) {
            audio.play();
        }
    };
    
    window.onblur = function() {
        // Caso a aba do navegador seja minimizada ou o foco saia da janela
        if (!audio.paused) {
            audio.pause();
        }
    };