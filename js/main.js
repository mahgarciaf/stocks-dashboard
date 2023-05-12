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


const handleAddTicker = async (event) => {
    // se você não redirecionar, ao enviar o formulário o sistema da um refresh na página
    // o event.preventDefault faz com que o refresh seja evitado
    event.preventDefault()
    //console.log(event.target.ticker.value)
    const ticker = event.target.ticker.value // pega o valor do input

    // recebe dois parâmetros -> a url (string) de destino e um array
    // o method por padrão é get, mas pode mudar
    // promise -> conceito importante
    // .then -> se der certo
    // ou função asincrona (a função pode demorar) -> usar o await para aguardar a resposta
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=8QC7B105TIB1TM93`)
        const data = await response.json()
        console.log(data)
        if(data["Global Quote"]["05. price"]){
            // alert('Deu certo!')
            const newTicker = 
            `<div class="ticker">
                <h2>${ticker}</h2>
                <p>${price}</p>
            </div>
            `

            const tickersList = document.querySelector("#tickers-list")
            tickersList.innerHTML += newTicker
            closeModal("add-stock")
        } else{
            alert(`Ticker ${ticker} não encontrado!`)
        }
    } catch (error) {
        alert(error)
    }

    // console.log(data["Global Quote"]["05. price"])
}

// SITE "alphavantage"
// CHAVE DE API 8QC7B105TIB1TM93
// LINK -> DOCUMENTAÇÃO DA api -> QUOTE ENDPOINT
// https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo