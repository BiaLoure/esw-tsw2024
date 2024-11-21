/* Abrir Perfil*/

const btnOpen = document.querySelector('button.perfil');
const btnCLose = document.querySelector('button.btn-close-perfil');
const modal = document.querySelector('#modalPerfil');

[btnOpen].forEach((ev) =>{
ev.addEventListener('click', function() {
  var modal = document.querySelector('#modalPerfil');
  if (modal.style.display === "block") {
      modal.style.display = "none";
  } else {
      modal.style.display = "block";
  }});
});

document.querySelector('button.btn-close-perfil').addEventListener('click', function() {
  document.querySelector('#modalPerfil').style.display = "none";
});


/* Mudar tipo de usuario */

const toggle = document.getElementById("toggle");
const texto = document.getElementById("tipo-usu");
const contador = document.getElementById("cont");
const lixos = document.getElementById('cont-lixos');
const btn_coleta = document.querySelectorAll(".btn-coleta");  
const btn_criar = document.getElementById("btn-criar");

toggle.addEventListener('click', function() {
  if (toggle.classList.contains('active')) {
      toggle.classList.remove('active');
      toggle.textContent = 'Ativar';
      texto.textContent = 'Sou Coletor';
      texto.style.color = '#3ACC97';
      contador.style.borderColor = '#3ACC97';
      lixos.textContent = 'Lixos Coletados';

      // Muda botão de coleta
      btn_coleta.forEach(button => {
        button.style.visibility  = 'visible';  
        
      });

      btn_criar.style.visibility = 'hidden';  

      
  } else {
      toggle.classList.add('active');
      toggle.textContent = 'Desativar';
      texto.textContent = 'Sou Morador';
      texto.style.color = '#3AB6CC';
      contador.style.borderColor = '#3AB6CC';
      lixos.textContent = 'Lixos Reciclados';

      btn_coleta.forEach(button => {
        button.style.visibility  = 'hidden';  
      });

      btn_criar.style.visibility = 'visible';  
  }
});

/* Modal de editar Informações*/

let eyeicon = document.getElementById('eyeicon')
let password = document.getElementById('password')
let eyeicon2 = document.getElementById('eyeicon2')
let password2 = document.getElementById('password2')

// botao mostrar senha 

mostrarsenha = function(){
  if(password.type == "password"){
    password.type = "text"
    eyeicon.src = "img/eye-open.png"
  }
  else{
    password.type = "password"
    eyeicon.src = "img/eye-close.png"
  }
}

confirmarsenha = function(){

  if(password2.type == "password"){
    password2.type = "text"
    eyeicon2.src = "img/eye-open.png"
  }
  else{
    password2.type = "password"
    eyeicon2.src = "img/eye-close.png"
  }
}

/* Abrir Modal de editar informações */

const btnOpenInfo = document.querySelector('button.btn-info');
const btnCLoseInfo = document.querySelector('button.btn-close-info');
const modalInfo = document.querySelector('#ModalInfo');
const fade = document.querySelector('#fade');
const btnSaveInfo = document.querySelector('button.editar');

[btnOpenInfo].forEach((ev) =>{
  ev.addEventListener('click', function() {
    var modalInfo = document.querySelector('#ModalInfo');
    if (modalInfo.style.display === "block") {
      modalInfo.style.display = "none";
    } else {
      modalInfo.style.display = "block";
    }});

    ev.addEventListener('click', function() {
      var fade = document.querySelector('#fade');
      if (fade.style.display === "block") {
        fade.style.display = "none";
      } else {
        fade.style.display = "block";
      }});
});

document.querySelector('button.btn-close-info').addEventListener('click', function() {
  document.querySelector('#ModalInfo').style.display = "none";
  document.querySelector('#fade').style.display = "none";
});

document.querySelector('button#editar').addEventListener('click', function() {
  document.querySelector('#ModalInfo').style.display = "none";
  document.querySelector('#fade').style.display = "none";
});








/* Abrir Lista de pontos */

const btnOpenLista = document.querySelector('button#btn-lista');
const btnCLoseLista = document.querySelector('button.btn-close-lista');
const modalLista = document.querySelector('#modalLista');

[btnOpenLista].forEach((ev) =>{
ev.addEventListener('click', function() {
  var modalLista = document.querySelector('#modalLista');
  if (modalLista.style.display === "block") {
      modalLista.style.display = "none";
  } else {
      modalLista.style.display = "block";
  }});
});

document.querySelector('button.btn-close-lista').addEventListener('click', function() {
  document.querySelector('#modalLista').style.display = "none";
});

/* Abrir Filtros*/ 

const btnFiltros = document.querySelector('button.btn-filtro');
const modalFiltro = document.querySelector('#modalFiltro');

[btnFiltros].forEach((ev) =>{
  ev.addEventListener('click', function() {
    var modalFiltro = document.querySelector('#modalFiltro');
    if (modalFiltro.style.display === "block") {
      modalFiltro.style.display = "none";
    } else {
      modalFiltro.style.display = "block";
    }});
});

document.getElementById('filtrar').addEventListener('click', function() {
  document.querySelector('#modalFiltro').style.display = "none";
});

/* Abrir Raking */

const btnOpenRanking = document.querySelector('button.btn-ranking');
const btnCLoseRanking = document.querySelector('button.btn-close-ranking');
const modalRanking = document.querySelector('#modalRanking');

[btnOpenRanking].forEach((ev) =>{
ev.addEventListener('click', function() {
  var modalRanking = document.querySelector('#modalRanking');
  if (modalRanking.style.display === "block") {
      modalRanking.style.display = "none";
  } else {
      modalRanking.style.display = "block";
  }});
});

document.querySelector('button.btn-close-ranking').addEventListener('click', function() {
  document.querySelector('#modalRanking').style.display = "none";
});

/* Abrir Criar Ponto*/

const btnOpenCriar = document.querySelector('button#btn-criar');
const btnCLoseCriar = document.querySelector('button.btn-close-criar');
const modalCriar = document.querySelector('#modalCriar');

[btnOpenCriar].forEach((ev) =>{
ev.addEventListener('click', function() {
  var modalCriar = document.querySelector('#modalCriar');
  if (modalCriar.style.display === "block") {
      modalCriar.style.display = "none";
  } else {
      modalCriar.style.display = "block";
  }});
});

document.querySelector('button.btn-close-criar').addEventListener('click', function() {
  document.querySelector('#modalCriar').style.display = "none";
});



