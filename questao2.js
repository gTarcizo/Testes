/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/


const numeroQuadrado = (x) =>{ 
    let teste = parseInt(Math.sqrt(x));
    return (teste * teste == x);
}

//o número pré-definido para a função é 0
const checarFibonacci = (n = 0) => {
   return numeroQuadrado(5 * n * n + 4) || numeroQuadrado(5 * n * n - 4);
}

// para checar é só 
// enviar um valor  ↓
if(checarFibonacci( 9 )){
  console.log('Faz parte!')
}else{
  console.log('Não faz parte')
}