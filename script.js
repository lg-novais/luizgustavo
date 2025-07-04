/*Estilizar o item do header quando esiver ativo */

const itemNav = document.querySelectorAll('nav li a');

function ativarItem(e){
    itemNav.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

itemNav.forEach((item) => {
    item.addEventListener('click', ativarItem)
})