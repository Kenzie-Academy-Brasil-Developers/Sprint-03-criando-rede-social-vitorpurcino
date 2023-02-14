import { posts, suggestUsers } from "./database.js";
import { registerPost } from "./register.js";
import { render, renderSugestao } from "./render.js";

renderSugestao(suggestUsers)
render(posts)
registerPost(posts)

const btnSeguir = document.querySelectorAll('.btnSeguir')

btnSeguir.forEach( btnSeguir => {
    btnSeguir.addEventListener('click', () =>{

        if(btnSeguir.id === 'btnSeguindo'){
            btnSeguir.id = ''
            btnSeguir.innerText = 'Seguir'
        }else{
            btnSeguir.id = 'btnSeguindo'
            btnSeguir.innerText = 'Seguindo'
        }
    })
})

const btnLike = document.querySelectorAll('.imgIcons')
const span = document.querySelectorAll('.spanIcons')

btnLike.forEach( btnLike => {
    btnLike.addEventListener('click', () =>{
        let spanLike

        if(btnLike.id === 'likeOff'){            
            btnLike.id = 'likeOn'
            btnLike.src = "./src/assets/img/heart_2.png"

            span.forEach( element => {
                if(element.dataset.spanId === btnLike.dataset.imgId){
                    element.innerText = Number(element.innerText) + 1
                }
            })
            
        }else{
            btnLike.id = 'likeOff'
            btnLike.src = "./src/assets/img/heart_1.png"

            span.forEach( element => {
                if(element.dataset.spanId === btnLike.dataset.imgId){
                    element.innerText = Number(element.innerText) - 1
                }
            })
        }
    })
})
