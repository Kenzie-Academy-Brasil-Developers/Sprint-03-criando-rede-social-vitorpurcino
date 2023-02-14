import { closeModal, createModal } from "./modal.js";

export function render(array) {
    const postsUl = document.querySelector('.conteiner__publication__list')
    postsUl.innerHTML = ''

    array.slice().reverse().forEach(post => {
        const publicacao = createPublication(post)

        postsUl.appendChild(publicacao)
    });

    renderModal(array)
}

function createPublication(post) {
    const li = document.createElement('li')
    const divConteinerUser = document.createElement('div')
    const imgUser = document.createElement('img')
    const divUser = document.createElement('div')
    const spanUser = document.createElement('span')
    const pUser = document.createElement('p')
    const article = document.createElement('article')
    const h1Titulo = document.createElement('h1')
    const pText = document.createElement('p')
    const divButton = document.createElement('div')
    const button = document.createElement('button')
    const divIcons = document.createElement('div')
    const imgIcons = document.createElement('img')
    const spanIcons = document.createElement('span')

    li.classList.add('publication')
    divConteinerUser.classList.add('conteiner__user')
    article.classList.add('publication__text')
    divButton.classList.add('publication__button')
    divIcons.classList.add('publication__button__icon')

    imgUser.src = post.img
    imgUser.alt = post.user

    spanUser.innerText = post.user
    pUser.innerText = post.stack
    divUser.append(spanUser, pUser)

    divConteinerUser.append(imgUser, divUser)

    h1Titulo.innerText = post.title
    pText.innerText = post.text.substring(0, post.text.indexOf('.') + 1)
    article.append(h1Titulo, pText)

    button.innerText = 'Abrir Post'
    button.dataset.postId = post.id
    button.classList.add('modal__open')

    imgIcons.src = "./src/assets/img/heart_1.png"
    spanIcons.innerText = post.likes

    divIcons.append(imgIcons, spanIcons)

    divButton.append(button, divIcons)

    li.append(divConteinerUser, article, divButton)

    return li
}

export function renderSugestao(array) {
    const sugestaoUl = document.querySelector('.conteiner__sugestao__users')

    sugestaoUl.innerHTML = ''

    array.forEach(users => {
        const sugestao = createSugestao(users)

        sugestaoUl.appendChild(sugestao)
    });

}

function createSugestao(user){
    const li = document.createElement('li')
    const divUser = document.createElement('div')
    const img = document.createElement('img')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const p = document.createElement('p')
    const button = document.createElement('button')

    li.classList.add('card__user')
    divUser.classList.add('conteiner__user')

    img.src = user.img
    img.alt = user.user

    span.innerText = user.user
    p.innerText = user.stack
    div.append(span, p)

    divUser.append(img, div)

    button.innerText = 'Seguir'
    button.dataset.sugestaoId = user.id

    li.append(divUser, button)

    return li
}

export function renderModal(array){
    const modal = document.querySelector('.modal__conteiner')
    const buttons = document.querySelectorAll('.modal__open')

    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            const id = button.dataset.postId
            const divModal = createModal(id, array)
            
            modal.innerHTML = ''
            modal.appendChild(divModal)
            modal.showModal()
            closeModal()
        })
    })

}