import { posts, suggestUsers } from "./database.js";
import { render, renderModal, renderSugestao } from "./render.js";

renderSugestao(suggestUsers)
render(posts)
renderModal(posts)

// function handleModal() {
//     const button = document.querySelector(".modal__open");
//     const modalContainer = document.querySelector(".modal__conteiner");
  
//     button.addEventListener("click", () => {
//       modalContainer.showModal();
  
//       closeModal();
//     });
//   }
  
//   function closeModal() {
//     const button = document.querySelector(".modal__close");
//     const modalContainer = document.querySelector(".modal__conteiner");
  
//     button.addEventListener("click", () => {
//       modalContainer.close();
//     });
//   }
  
//   handleModal();