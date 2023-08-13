/*
Arquivos js externos
*/

document.write("Olá mundo!")
console.log("Outro olá mundo!") //Comentario


//CRIAR VARIÁVEIS E ATRIBUIR VALORES
let mensagem = "Minha mensagem"
let mensagem2 = "Outra mensagem"
let meuPeso = 83.5
let minhaAltura = 1.75
let minhaIdade = 40
let EhDoador = false
let teste = null

// CRIAR CONSTANTES E ATRIBUIR VALOR

const PI = 3.1415
const TAXA = 0.5

teste = "Algum conteúdo"

// ESCREVER O CONTEUDO DE VARIAVEIS E CONSTANTES

document.write("<p> Mensagem " + mensagem + "</p>")  
document.write(`mensagem2: ${mensagem2}`)
document.write("<p>Peso: " + meuPeso + "Kg </p>" )
document.write(`Altura: ${minhaAltura} m`)
document.write("<p> Idade: " + minhaIdade + " anos</p>")
document.write(`Doador? ${EhDoador}`)
document.write("<p>Teste: " + teste + "</p>")
document.write("<p>PI: " + PI + "</p>")
document.write("<p>TAXA: " + TAXA + "</p>")