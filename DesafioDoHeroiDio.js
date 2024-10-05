//Variáveis
let XP = 11267;
let NomeHeroi = "Basquetobaro-san";
let Nivel = XP;
let QtdXpFalta;


//Validação da quantidade de XP e Nivel
if (XP <= 1000) {
    Nivel = "FERRO"
    QtdXpFalta = 1000 - XP;
}else if (XP >= 1001 && XP <=2000 ) {
    Nivel = "BRONZE"
    QtdXpFalta = 5000 - XP;
}else if (XP >= 2001 && XP <=5000 ) {
    Nivel = "PRATA"
    QtdXpFalta = 5000 - XP;
}else if (XP >= 5001 && XP <=7000 ) {
    Nivel = "OURO"
    QtdXpFalta = 7000 - XP;
}else if (XP >= 7001 && XP <=8000 ) {
    Nivel = "PLATINA"
    QtdXpFalta = 8000 - XP;
}else if (XP >= 8001 && XP <=9000 ) {
    Nivel = "ASCENDENTE"
    QtdXpFalta = 9000 - XP;
}else if (XP >= 9001 && XP <=10000 ) {
    Nivel = "IMORTAL"
    QtdXpFalta = 10000 - XP;
}else if(XP >= 10001 ) {
    Nivel = "RADIANTE"
    QtdXpFalta = 0;
}

//Exibe a mensagem.
console.log(`O Herói : ${NomeHeroi} está no nível de: ${Nivel} e tem: ${XP} de XP.`);

//Calcula quantidade de XP que falta para subir de nivel.
if (QtdXpFalta > 0){
    console.log(`Falta ${QtdXpFalta} para atingir o próximo nível.`)
}else {
    console.log(`${NomeHeroi} está no nível Máximo. Parabéns.`)
}
