//1 - Crie uma condição que exiba uma mensagem no console se a idade 
//for maior que 18

let idade = 25
if(idade >= 18){
    console.log("Você é maior de idade (boa sorte)")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade 
//E a condição humana seja true

let humano = true
if(idade >= 18 && humano == true){
    console.log("Você é humano e maior de idade")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário 
//em Janeiro OU Dezembro

let nome = "Marcelo"
let mes = "janeiro"
if(mes == "dezembro" || mes == "janeiro"){
    console.log(`${nome} você faz aniversário em janeiro ou dezembro`)
}else{
    console.log(`${nome} você não faz aniversário em janeiro ou dezembro`)
}

//4 - Criar uma condição que exiba uma mensagem no console 
//se seu nome começar com a letra R

let name = "Tatiana"

if(name.substring(0,1) === "R"){
    console.log("Seu nome começa com a letra R")
}else{
    console.log("Seu nome não começa com a letra R")
}

//5 - Criar uma condição que exiba uma mensagem no console se 
//seu sobrenome tenha mais de 6 letras OU seu nome começar com 
//a letra E

let nome = "Luciana"
let sobrenome = "Santos"

if(nome.substring(0,1) === "E" || sobrenome.length > 6){
    console.log("Seu nome começa com a letra E ou seu sobrenome tem mais de 6 letras")
}else{
    console.log("Seu nome não começa com a letra E ou seu sobrenome não tem mais de 6 letras")
}