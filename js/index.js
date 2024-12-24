let contador = document.getElementById('contador')
let saldo = 2000
let ganhos = 1
let imageclick = document.getElementById('img_cookie')
const button = document.querySelector('.button_loja')
contador.innerText = saldo



imageclick.addEventListener("click", clicarimagem)



let itens = [
    { nome: 'Picareta de Madeira', preco: 1000, ganhos: 5, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Cobre', preco: 2000, ganhos: 10, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Ouro', preco: 4000, ganhos: 20, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Platina', preco: 8000, ganhos: 40, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Tungstenio', preco: 16000, ganhos: 80, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Aço', preco: 32000, ganhos: 160, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Titanio', preco: 64000, ganhos: 320, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Diamante', preco: 128000, ganhos: 640, imagem: 'caminho da imagem', comprado: false  },
    { nome: 'Picareta de Obsidiana', preco: 256000, ganhos: 1280, imagem: 'caminho da imagem',comprado: false  },
];

let pocoes = [
    { nome: 'Poção de Mineração I', preco: 50, multiplicador: 1.5, duracao: 3000, imagem: 'caminho da imagem' },
    { nome: 'Poção de Mineração II', preco: 100, multiplicador: 3.0, duracao: 5000, imagem: 'caminho da imagem' },
    { nome: 'Poção de Mineração III', preco: 200, multiplicador: 6.0, duracao: 7000, imagem: 'caminho da imagem' },
    { nome: 'Poção de Mineração 1V', preco: 400, multiplicador: 12.0, duracao: 8000, imagem: 'caminho da imagem' },
    { nome: 'Poção de Mineração X', preco: 800, multiplicador: 24.0, duracao: 10000, imagem: 'caminho da imagem' },
    { nome: 'Poção do Creeper', preco: 1000, multiplicador: 50.0, duracao: 15000, imagem: 'caminho da imagem' }
];

function criarBotoes(){
    for(let i = 0; i < itens.length  ; i++)
        {
            let LocalButton = document.querySelector('.container__scroll__loja')
            let newbuttons = document.createElement("button")
            newbuttons.textContent = `${itens[i].nome} preço: ${itens[i].preco}`
            LocalButton.appendChild(newbuttons)
            newbuttons.addEventListener("click", function(e){
                if(itens[i].comprado == false){
                    if(saldo >= itens[i].preco){
                        ganhos = itens[i].ganhos
                        alert(`Voce Acabou de comprar: ${itens[i].nome}`)
                        newbuttons.style.background = "Blue"
                        newbuttons.textContent = itens[i].nome
                        itens[i].comprado = true
                        console.log(itens[i].comprado)
                    }
                    else{
                        alert(`sem dinheiro para comprar ${itens[i].nome} ainda lhe faltam: ${itens[i].preco - saldo} dinheiros `)
                    }
                }else{
                    ganhos = itens[i].ganhos
                    alert(`Voce Acabou de selecionar: ${itens[i].nome}`)
                }

            })
        }
    
}
    








function clicarimagem(){
    saldo += ganhos
    contador.innerText = saldo
    console.log(saldo)
    

    switch(true){
        case saldo >= 1000: 
            imageclick.src = "img/ferro.png"
            break;
        case saldo >= 2000:
            imageclick.src = "img/ouro.png"
            break;
        case saldo >= 3000:
            imageclick.src = "img/esmeralda.png"
            break;
        case saldo >= 5000:
            imageclick.src = "img/lapisazuli.png"
            break;
        case saldo >= 6500:
            imageclick.src = "img/diamante.png"
            break;
        case saldo >= 7000:
            imageclick.src= "img/bedrock.png"
            break;
    }

}


criarBotoes()