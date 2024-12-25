let contador = document.getElementById('contador')
let saldo = 2000
let ganhos = 1
let imageclick = document.getElementById('img_cookie')
const button = document.querySelector('.button_loja')
contador.innerText = parseInt(saldo)

let botoesPicaretasCriados = false;
let botoesPocoesCriados = false;


imageclick.addEventListener("click", clicarimagem)



// criando array de itens com seus atributos
let itens = [
    { nome: 'Picareta de Madeira', preco: 1000, ganhos: 5, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Cobre', preco: 2000, ganhos: 10, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Ouro', preco: 4000, ganhos: 20, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Platina', preco: 8000, ganhos: 40, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Tungstenio', preco: 16000, ganhos: 80, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Aço', preco: 32000, ganhos: 160, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Titanio', preco: 64000, ganhos: 320, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Diamante', preco: 128000, ganhos: 640, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Picareta de Obsidiana', preco: 256000, ganhos: 1280, imagem: 'caminho da imagem', comprado: false },
];

// criando array das poções com seus atributos
let pocoes = [
    { nome: 'Poção de Mineração I', preco: 500, multiplicador: 1.5, duracao: 3000, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Poção de Mineração II', preco: 1000, multiplicador: 3.0, duracao: 5000, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Poção de Mineração III', preco: 2000, multiplicador: 6.0, duracao: 7000, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Poção de Mineração 1V', preco: 4000, multiplicador: 12.0, duracao: 8000, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Poção de Mineração X', preco: 8000, multiplicador: 24.0, duracao: 10000, imagem: 'caminho da imagem', comprado: false },
    { nome: 'Poção do Creeper', preco: 16000, multiplicador: 50.0, duracao: 15000, imagem: 'caminho da imagem', comprado: false }
];



// Funções para desabilitar os botoes das abas ao clicar na outra function

function DesfazerBotoesPicaretas() {

    let buttonspicaretas = document.querySelectorAll('.button-picaretas')
    let buttonspocoes = document.querySelectorAll('.button-potions')
    buttonspicaretas.forEach(button => {
        button.style.display = 'none';
    });

    buttonspocoes.forEach(button => {
        button.style.display = 'block';
    });

}
function DesfazerBotoesPocoes() {

    let buttonspicaretas = document.querySelectorAll('.button-picaretas')
    let buttonspocoes = document.querySelectorAll('.button-potions')
    buttonspicaretas.forEach(button => {
        button.style.display = 'block';
    });

    buttonspocoes.forEach(button => {
        button.style.display = 'none';
    });


}


// função para criar os botoes da picareta

function criarBotoes() {
    if (botoesPicaretasCriados) return;
    for (let i = 0; i < itens.length; i++) {
        let LocalButton = document.querySelector('.container__scroll__loja')
        let newbuttons = document.createElement("button")
        newbuttons.className = 'button-picaretas'
        newbuttons.textContent = `${itens[i].nome} preço: ${itens[i].preco}`
        LocalButton.appendChild(newbuttons)
        newbuttons.addEventListener("click", function (e) {
            if (itens[i].comprado == false) {
                if (saldo >= itens[i].preco) {
                    ganhos = itens[i].ganhos
                    alert(`Voce Acabou de comprar: ${itens[i].nome}`)
                    newbuttons.style.background = "Blue"
                    newbuttons.textContent = itens[i].nome
                    itens[i].comprado = true
                    console.log(itens[i].comprado)
                }
                else {
                    alert(`sem dinheiro para comprar ${itens[i].nome} ainda lhe faltam: ${itens[i].preco - saldo} dinheiros `)
                }
            } else {
                ganhos = itens[i].ganhos
                alert(`Voce Acabou de selecionar: ${itens[i].nome}`)
            }

        })
    }
    botoesPicaretasCriados = true;

}

// função para criar os buttons das Poções

function criarBotoesPocao() {
    if (botoesPocoesCriados) return;
    for (let i = 0; i < pocoes.length; i++) {
        let LocalButton = document.querySelector('.container__scroll__loja')
        let newpotionsbuttons = document.createElement("button")
        newpotionsbuttons.className = 'button-potions'
        newpotionsbuttons.textContent = `${pocoes[i].nome} preço: ${pocoes[i].preco}`
        LocalButton.appendChild(newpotionsbuttons)

        newpotionsbuttons.addEventListener("click",
            function (e) {
                let multiplicadorOriginal = ganhos
                if (pocoes[i].comprado == false) {
                    if (saldo >= pocoes[i].preco) {
                        pocoes[i].comprado = true;
                        newpotionsbuttons.style.background = "Blue"
                        ganhos *= pocoes[i].multiplicador
                        setTimeout(function () {
                            ganhos = multiplicadorOriginal;
                            alert(`O efeito de ${pocoes[i].nome} acabou.`);
                        }, pocoes[i].duracao);
                    } else {
                        alert('Dinheiro insuficiente para comprar essa poção')
                    }

                } else {
                    alert(`Voce Ja Comprou a ${pocoes[i].nome}`)
                }
            })
    }
    botoesPocoesCriados = true;


}

// Função para Trocar as paginas utilizando as outras 2 functions para simplificar a logica

function Trocarpaginas() {
    let button1 = document.querySelector(".buttonTrocarPag1");
    let button2 = document.querySelector(".buttonTrocarPag2");

    button1.addEventListener("click", function (e) {
        DesfazerBotoesPicaretas();
        if (!botoesPocoesCriados) {

            criarBotoesPocao()

        }
    });

    button2.addEventListener("click", function (e) {
        DesfazerBotoesPocoes();
        if (!botoesPicaretasCriados) {

            criarBotoes()

        }

    });

}

// Função para Incrementar os botoes ao clicar na imagem

function clicarimagem() {
    saldo += ganhos
    contador.innerText = parseInt(saldo)
    console.log(saldo)

    switch (true) {

        case saldo < 2000:
            imageclick.src = "img/carvao.png"
            Animacao(0)
            break;
        case saldo >= 2000:
            imageclick.src = "img/ferro.png"
            Animacao(1)
            break;
        case saldo >= 4000:
            imageclick.src = "img/ouro.png"
            Animacao(2)
            break;
        case saldo >= 8000:
            imageclick.src = "img/esmeralda.png"
            Animacao(3)
            break;
        case saldo >= 16000:
            imageclick.src = "img/lapisazuli.png"
            Animacao(4)
            break;
        case saldo >= 32000:
            imageclick.src = "img/diamante.png"
            Animacao(5)
            break;
        case saldo >= 64000:
            imageclick.src = "img/bedrock.png"
            Animacao(6)
            break;
    }




}


// função para retornar um valor aleatorio de acordo com o numero fornecido
function Random(num) {
    return Math.floor(Math.random() * num)
}

// Função para executar o efeito de neve


function Animacao(numimage) {

    const Img = document.createElement('img')
    const LocalImg = document.querySelector('.container__png__falling');
    Img.className = 'img_falling'

    switch (true) {
        case numimage == 0:
            Img.src = 'img/carvao.png'
            break
        case numimage == 1:
            Img.src = 'img/ferro.png'
            break
        case numimage == 2:
            Img.src = 'img/ouro.png'
            break
        case numimage == 3:
            Img.src = 'img/esmeralda.png'
            break
        case numimage == 4:
            Img.src = 'img/lapisazuli.png'
            break
        case numimage == 5:
            Img.src = 'img/diamante.png'
            break
        case numimage == 6:
            Img.src = 'img/bedrock.png'
            break

    }
    Img.style.top = `${Random(100)}px`
    Img.style.left = `${Random(300)}px`


    // Codigo para nao se repitir as animações automaticamente.
    Img.addEventListener('animationend', () => {
        Img.remove();
    });


    LocalImg.appendChild(Img)


}






// execução das funções para trocar de paginas e as de criar botoes
Trocarpaginas()
criarBotoes()











