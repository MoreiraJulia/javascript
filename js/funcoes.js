let idade = 18;
console.log(idade);
console.log( typeof idade);

let nome = "Julia";
console.log(nome);
console.log( typeof nome);

/*
parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) +numero1 + +numero2 + +numero3
*/

let verdade = false;
console.log(verdade);
console.log(typeof verdade);

let listaDeFrutas1 = "Maçã";
let listaDeFrutas2 = "Banana";
let listaDeFrutas3 = "Limão";

console.log(listaDeFrutas1, listaDeFrutas2, listaDeFrutas3);

//Array --> Variável que eu consigo subdividir
let listaDeFrutas = ["maçã" , "Banana" , "Limão" , "Laranja"];
console.dir(listaDeFrutas);
console.log( typeof listaDeFrutas);

//o Array possui posições, cada valor do array fica armazenado em uma posição,começando em 0. Quando eu quero exibir um valor específico do array eu preciso indidcar a posição onde se encontra esse valor NomeDoArray[posição] . Ex: listaDeFrutas[1] --> "Banana"

console.log(listaDeFrutas[1]);
console.clear();

let listaDeNotas = [5.5 , 7.9 , 9.5 , 3.0];
console.log(listaDeNotas);
console.dir(listaDeNotas);
console.log(listaDeNotas[2]);

let personagemNome = "Eldor";
let personagemRaca = "Elfo";
let personagemClasse = "Mago";
let personagemVida = 100;
let personagemEnergia = 50;
console.log(personagemNome, personagemRaca, personagemClasse, personagemVida, personagemEnergia);

/*let personagem = ["Eldor", "Elfo", "Mago", 100, 50];
console.dir(personagem);

persogem[3] = 80;
console.log(personagem);*/
let personagem = {
    "nome" : "Eldor",
    "raca" : "Elfo",
    "classe" : "Mago",
    "vida" : 100,
    "energia" : 50
};
console.clear()
console.dir(personagem);
console.log(personagem.vida);
console.log("Batalha");
personagem.vida = 80;
console.log(personagem.vida);

console.clear();

/*
//nem chega a executar
let condicao = true;
while (condicao){
    console.log(1);
    condicao = false;
} */


//i --> incremento, i é uma variável usada para controlar o laço de repetição
//let i = 1;
//while (i <= 10) {
    //console.log(i);
    //i = i + 1;
    //substituir i = i + 1 --> i++
//}

/*
i = 0;
while (i < listaDeFrutas.length) {
    console.log(listaDeFrutas[i]);
    i++;
}
*/

/*
//primeiro entra, executa e vê se é falso 
let i = false;
do{
    console.log(i);
}while (i);
*/

for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
} 

for(let i = 0 ; i < listaDeFrutas.length ; i++){
    console.log(listaDeFrutas[i]);
}


console.clear();

//Math.random() * (max - min) + min;
let numeroComputador = (Math.random() * (10 - 1) + 1);
console.log(numeroComputador);
let numeroJogador = prompt("Informe um núemro de 1 à 10");

if(numeroJogador == numeroComputador){
    console.log("Você Ganhou");
}else{
    console.log("Você Perdeu");
}