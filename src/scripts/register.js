import { render } from "./render.js"

export function newPost(array){
    
    const inputs = document.querySelectorAll('.text__box')
    const post = {id: array.length + 1}
    let contador = 0


    inputs.forEach(input => {
        if(input.value === ''){
            contador++
        }
        post[input.name] = input.value
        input.value = ''
    }) 

    post['user'] = "Samuel Leão"
    post['stack'] = "Front end Engineer"
    post['img'] = "./src/assets/img/user1.svg"
    post['likes'] = 0

    if(contador > 0){
        alert('Informe os dados antes de Postar')
    }
    array.push(post)
}

export function registerPost(array){
    const btnPost = document.querySelector('#submitBtn')

    btnPost.addEventListener('click', (event) =>{
        // event.preventDefault()

        newPost(array)
        render(array)
    })
}