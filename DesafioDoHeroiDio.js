//Variaveis
let XP = 1000
let NomeHeroi = "bengala torta"
var Elo = XP



//Validação da quantidade de XP e Elo
if (XP <= 1000) {
    ELO = "ferro"
}else if (XP >= 1001 && XP <=2000 ) {
    ELO = "Bronze"
}else if (XP >= 2001 && XP <=5000 ) {
    ELO = "Prata"
}else if (XP >= 5001 && XP <=7000 ) {
    ELO = "Ouro"
}else if (XP >= 7001 && XP <=8000 ) {
    ELO = "Platina"
}else if (XP >= 8001 && XP <=9000 ) {
    ELO = "Ascendente"
}else if (XP >= 9001 && XP <=10000 ) {
    ELO = "Imortal"
}else if(XP >= 10001 ) {
    ELO = "Radiante"
}

//Exibe a mensagem.
console.log(`O Herói de nome: ${NomeHeroi} está no nível de: ${ELO}`);