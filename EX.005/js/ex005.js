for(let i = 1 ; i <= 50; i++){
    //aqui eu verifico se o número é ímpar, todo número que dividido por 2 sobra um resto diferente de 0 é ímpar
    if(i%2 != 0){
        document.querySelector("#contagem").innerHTML += i + " ";
    }
}