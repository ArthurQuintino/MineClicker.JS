let contador = document.getElementById('contador')
let saldo = 999
let ganhos = 1
let imageclick = document.getElementById('img_cookie')
const button = document.querySelector('.button_loja')



imageclick.addEventListener("click", clicarimagem)


function comprar1(){
    
    if(saldo >= 1000){
        button.disabled = true;
        saldo -= 1000
        ganhos = 5;
        button.style.backgroundColor = "black"; 
        button.style.color = "white"; 
        console.log("Picareta de Madeira comprada!");


    }else{
        alert('sem dinheiro para comprar amigo :(')
    }
  
}
function comprar2(){
    if(saldo >= 2000){
        button.disabled = true;
        saldo -= 2000
        ganhos = 10;
        button.style.backgroundColor = "black"; 
        button.style.color = "white"; 
        console.log("Picareta de Cobre comprada!");


    }else{
        alert('sem dinheiro para comprar amigo :(')
    }


}
function comprar3(){
    if(saldo >= 3000){
        button.disabled = true;
        saldo -= 2000
        ganhos = 20;
        button.style.backgroundColor = "black"; 
        button.style.color = "white"; 
        console.log("Picareta de Cobre comprada!");


    }else{
        alert('sem dinheiro para comprar amigo :(')
    }


}
function comprar4(){



}
function comprar5(){



}
function comprar6(){



}
function comprar7(){



}
function comprar8(){



}
function comprar9(){



}
function comprar10(){



}
function comprar11(){



}
function comprar12(){



}
function comprar13(){



}
function comprar14(){



}
function comprar15(){



}
function comprar16(){



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







