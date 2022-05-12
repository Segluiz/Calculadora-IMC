const nome = document.querySelector("#identidade");
const altura = document.querySelector("#tamanho");
const peso = document.querySelector(".gordura");
const calcular = document.querySelector(".calcular");
const resposta = document.querySelector(".resposta");

calcular.addEventListener("click",()=>{
    let identidade = nome.value;
    let tamanho = altura.value;
    let gordura = peso.value;

    let RdoCalculo = gordura / (tamanho * tamanho);

    resposta.innerHTML = `${identidade} sua classificação de índice de massa corporal é igual a ${RdoCalculo} Kg/m2.`;
    resposta.style.color="white";
    resposta.style.fontSize="14px"
})