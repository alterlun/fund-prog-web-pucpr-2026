// Abre modal com descrição do livro ao clicar em "Saiba Mais"
function OpenModal(BookButton) {
    var txt1 = document.getElementById("txt1"); // título
    var txt2 = document.getElementById("txt2"); // autor, ano, gênero
    var txt3 = document.getElementById("txt3"); // descrição
    // Verifica qual botão clicado e mostra o respectivo conteúdo
    switch (BookButton) {
        case "Book1Button":
            txt1.innerHTML = "Os Miseráveis";
            txt2.innerHTML = "Autor: Victor Hugo <br> Ano: 1862 <br> Gênero: Romance Histórico";
            txt3.innerHTML = "Uma obra que acompanha Jean Valjean em sua luta por redenção em meio às injustiças sociais da França do século XIX.";
            break;
        case "Book2Button":
            txt1.innerHTML = "Crime e Castigo";
            txt2.innerHTML = "Autor: Fiódor Dostoiévski <br> Ano: 1866 <br> Gênero: Romance Psicológico";
            txt3.innerHTML = "A história de Raskólnikov, um jovem estudante que comete um assassinato e enfrenta os dilemas morais e psicológicos de sua consciência.";
            break;
        case "Book3Button":
            txt1.innerHTML = "Cem Anos de Solidão";
            txt2.innerHTML = "Autor: Gabriel García Márquez <br> Ano: 1967 <br> Gênero: Realismo Mágico";
            txt3.innerHTML = "A saga da família Buendía na cidade fictícia de Macondo, misturando realidade e fantasia em uma narrativa épica.";
            break;
        case "Book4Button":
            txt1.innerHTML = "O Sol é para Todos";
            txt2.innerHTML = "Autor: Harper Lee <br> Ano: 1960 <br> Gênero: Romance";
            txt3.innerHTML = "Um retrato poderoso da injustiça racial no sul dos Estados Unidos, narrado pela jovem Scout Finch.";
            break;
        case "Book5Button":
            txt1.innerHTML = "A Montanha Mágica";
            txt2.innerHTML = "Autor: Thomas Mann <br> Ano: 1924 <br> Gênero: Romance";
            txt3.innerHTML = "Hans Castorp visita um sanatório nos Alpes e mergulha em reflexões filosóficas e existenciais sobre tempo e vida.";
            break;
        case "Book6Button":
            txt1.innerHTML = "Musashi";
            txt2.innerHTML = "Autor: Eiji Yoshikawa <br> Ano: 1935 <br> Gênero: Romance Histórico";
            txt3.innerHTML = "A jornada do samurai Miyamoto Musashi em busca de sabedoria, disciplina e maestria na arte da espada.";
            break;
        // Se clicado em algum botão sem descrição, mostra conteúdo de default
        default:
            txt1.innerHTML = "Título";
            txt2.innerHTML = "Autor, Ano, Gênero";
            txt3.innerHTML = "Descrição";
            break;
    }
    // Exibe o modal
    document.getElementById("knowMore").style.display = "block";
}

// Fecha o modal 
function closeModal() {
    document.getElementById("knowMore").style.display = "none";
}

// Eventos dos botões (ao clicar em cada um, chama a função OpenModal com o ID do botão)
document.getElementById("Book1Button").onclick = function() { OpenModal("Book1Button"); };
document.getElementById("Book2Button").onclick = function() { OpenModal("Book2Button"); };
document.getElementById("Book3Button").onclick = function() { OpenModal("Book3Button"); };
document.getElementById("Book4Button").onclick = function() { OpenModal("Book4Button"); };
document.getElementById("Book5Button").onclick = function() { OpenModal("Book5Button"); };
document.getElementById("Book6Button").onclick = function() { OpenModal("Book6Button"); };
// Botão de fechar modal e chama função closeModal
document.getElementById("closeModalButton").onclick = closeModal;
