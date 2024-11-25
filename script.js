
let valores = []


function adicionarValor(){
  let txtentrada = document.querySelector('#entrada');
  let entrada = Number(txtentrada.value)
  
  valores.push(entrada)
  console.log(entrada)
  console.log(valores)
}



//console.log(entrada)