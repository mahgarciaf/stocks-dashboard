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

const handleModalClose = (event) => {
    if(event.target.className === "modal"){
        event.target.style.display = "none"
    }
}
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
    // 8QC7B105TIB1TM93
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=8QC7B105TIB1TM93`)
        const data = await response.json()
        //console.log(data)
        //const price = data["Global Quote"]["05. price"]
        //const previousClosePrice = data["Global Quote"]["previous close"] // informação retirada no console

        const price = 89.6
        const previousClosePrice = 120.0

        if(price && previousClosePrice){
            // alert('Deu certo!')

            // conversão de uma variável para outra
            const priceFormatted = parseFloat(price).toFixed(2)
            const previousClosePriceFormatted = parseFloat(previousClosePrice).toFixed(2)
            let priceChange = '' // vazio por padrão
            let symbol = ''

            if (priceFormatted !== previousClosePriceFormatted) {
                if(priceFormatted > previousClosePrice){
                    // se o valor atual for maior do que a previsão, ele ficará verde
                    priceChange = 'increase'
                    symbol = '▲'
                } else{
                    priceChange = 'decrease'
                    symbol = '▼'
                }
            }

            const newTicker = 
            `<div class="ticker">
                <button class="btn-close" onclick="removeTicker(event)">x</button>
                <h2>${ticker}</h2>
                <p class="${priceChange}">${symbol} ${priceFormatted}</p>
            </div>
            `

            const tickersList = document.querySelector("#tickers-list")
            // tickersList.innerHTML += newTicker
            tickersList.innerHTML = newTicker + tickersList.innerHTML // dessa forma os mais antigos vão para o final
            // é dessa forma que os tickers são adicionados na tela
            addTickersCloseEvents()
            closeModal("#add-stock")
        } else{
            alert(`Ticker ${ticker} não encontrado!`)
        }
    } catch (error) {
        alert(error)
    }

    // console.log(data["Global Quote"]["05. price"])
}

//const addTickersCloseEvents = () 


const handleTickerMouseEnter = (event) => {
    const ticker = event.target
    const btnClose = ticker.querySelector(".btn-close")
    btnClose.style.display = "block"
}

const handleTickerMouseLeave = (event) => {
    const ticker = event.target
    const btnClose = ticker.querySelector(".btn-close")
    btnClose.style.display = "none"
}

const addTickersCloseEvents = () => {
    const tickers = document.querySelectorAll(".ticker")
    tickers.forEach((ticker) => {
        ticker.addEventListener("mouseenter", handleTickerMouseEnter)
        ticker.addEventListener("mouseleave", handleTickerMouseLeave)
    })
}

const removeTicker = (event) => {
    const btnClose = event.target
    const ticker = btnClose.closest('.ticker')
    // o closest ele procura a div mais perto na hierarquia que possui a classe procurada
    ticker.remove()
}


const modal = document.querySelector(".modal")
modal.addEventListener("click", handleModalClose)


addTickersCloseEvents()

// SITE "alphavantage"
// CHAVE DE API 8QC7B105TIB1TM93
// LINK -> DOCUMENTAÇÃO DA api -> QUOTE ENDPOINT
// https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo