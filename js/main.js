const openModal = (idModal) => {
    const divModal = document.querySelector(idModal)
    divModal.style.display = "flex"
}
    // document está relacionado ao documento da sua página, características do objeto
    // querySelector -> faz a seleção da div

// const testFunc = () => {
//     console.log("Executei a função")
// }

// const closeModal = (idModal) => {
//     const divModal = document.querySelector(idModal)
//     divModal.style.display = "none"
// }

// // Função única para fechar o modal
//     // target -> elemento que foi clicado
// const closeModal = (event, idModal) => {

//     if(idModal){
//         const divModal = document.querySelector(idModal)
//         divModal.style.display = "none"
//     }

//     if(event && event.target.className === "modal"){
//         event.target.style.display = "none"
//     }
// }


// Evento de click indementdente do html

const handleCloseModal = (event) => {
    if(event.target.className === "modal"){
        event.target.style.display = "none"
    }
}

const closeModal = (idModal) => {
    const divModal = document.querySelector(idModal)
    divModal.style.display = "none"
}

const modal = document.querySelector(".modal")
modal.addEventListener("click", handleCloseModal)
    // por ser um evento, o parâmetro event é passado direto por parâmetro
