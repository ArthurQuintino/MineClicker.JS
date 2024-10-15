let contador = document.getElementById('contador')
let saldo = 0
let ganhos = 1
let imageclick = document.getElementById('img_cookie')

imageclick.addEventListener("click", clicarimagem)






function comprar(){



}






function clicarimagem(){
    saldo += ganhos
    contador.innerText = saldo
    console.log(saldo)
}