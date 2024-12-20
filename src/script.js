// Seleciona a div pelo seu ID
const clickableDivExc = document.getElementById('excel');
const clickableDivInt = document.getElementById('introducao');
const clickableDivTxt = document.getElementById('textos');
const clickableDivAxl = document.getElementById('auxiliares');

const clickableDivGame = document.getElementById('idGame');
const clickableDivAtividades = document.getElementById('idAtividades');
const clickableDivTsiflix = document.getElementById('idTsiflix');


// Adiciona um evento de clique à div
clickableDivInt.addEventListener('click', function() {
    window.location.href = './apostila/apostila-home.html';
});
clickableDivExc.addEventListener('click', function() {
    window.location.href = './excel/excel-home.html';
});
clickableDivTxt.addEventListener('click', function() {
    window.location.href = './digitacao/digitacao-home.html';
});
clickableDivAxl.addEventListener('click', function() {
    window.location.href = './auxiliares/auxiliares-home.html';
});

clickableDivGame.addEventListener('click', function() {
    window.location.href = './game/menu-game.html';
});
clickableDivAtividades.addEventListener('click', function() {
    window.location.href = './atividades/index.html';
});
clickableDivTsiflix.addEventListener('click', function() {
    window.location.href = 'https://ead10.com.br/escolatsiinformatica/portal/access';
});



VanillaTilt.init(document.querySelectorAll(".box-option"), {
    max: 25,
    speed: 400
});
