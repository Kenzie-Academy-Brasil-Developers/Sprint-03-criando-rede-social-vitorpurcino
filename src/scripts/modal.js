export function createModal(id, array){
    const divModal = document.createElement('div')
    const btnClose = document.createElement('button')
    const imgClose = document.createElement('img')
    const divUser = document.createElement('div')
    const imgUser = document.createElement('img')
    const divData = document.createElement('div')
    const spanName = document.createElement('span')
    const pWork = document.createElement('p')
    const article = document.createElement('article')
    const h1Title = document.createElement('h1')
    const pText = document.createElement('p')

    const post = array.find( post => post.id == Number(id))

    divModal.classList.add('modal')
    btnClose.classList.add('modal__close')
    divUser.classList.add('conteiner__user')
    article.classList.add('modal__article')
    h1Title.classList.add('modal__title')
    pText.classList.add('modal__text')

    imgClose.src = "./src/assets/img/close.png"
    imgClose.alt = 'fechar modal'

    btnClose.appendChild(imgClose)

    imgUser.src = post.img
    imgUser.alt = post.user

    spanName.innerText = post.user
    pWork.innerText = post.stack
    
    divData.append(spanName, pWork)
    divUser.append(imgUser, divData)

    h1Title.innerText = post.title
    pText.innerText = post.text

    article.append(h1Title, pText)

    divModal.append(btnClose, divUser, article)

    return divModal
}

export function closeModal(){
    const modal = document.querySelector('.modal__conteiner')
    const closeButton = document.querySelector('.modal__close')

    closeButton.addEventListener('click', () =>{
        modal.close()
    })
}