const bMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral')

bMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});

// MINHA SOLUÇÃO
// document.getElementById("menu").onclick = function() {myFunction()};
//
// function myFunction() {
//     if(document.getElementById("menu-lateral").style.display !== 'none'){
//         document.getElementById("menu-lateral").style.display = "none";
//     } else {
//         document.getElementById("menu-lateral").style.display = ""
//     }
// }
