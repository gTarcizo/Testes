/* 
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/


//valores copiados do json disponibilizado no email
const faturamentos = JSON.parse(`[
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]`)
const jsonSemZero = new Array
const dias = new Array
const acima = new Array
let mediaMensal


// remove os dias com faturamento igual a 0 e adiciona os valores na constante jsonSemZero;
for(faturamento of faturamentos){
    if(faturamento.valor !== 0){
        jsonSemZero.push(faturamento.valor)
        dias.push(faturamento.dia)
    }
}


//soma de todos os indices do array
let somaArray = jsonSemZero.reduce(function(a, b){
    a += b
    return a
}, 0)


// média mensal
mediaMensal = somaArray / jsonSemZero.length


// checa e adiciona num array quantos dias foram acima da média
for( valor in jsonSemZero){
    if(jsonSemZero[valor] > mediaMensal){
        acima.push(dias[valor])
    }
}


// retorna o maior faturamento
const maiorFaturamento = () =>  jsonSemZero.map(Number).reduce(function(a,b){
    maior = Math.max(a, b)
    return Math.max(a, b)
})


// retorna o menor faturamento
const menorFaturamento = () => jsonSemZero.map(Number).reduce(function(a,b){
    return Math.min(a, b)
})



console.log(`O maior faturamento foi de: ${maiorFaturamento()}`)
console.log(`O menor faturamento foi de: ${menorFaturamento()}`)
console.log(`O total de ${acima.length} dias faturaram valores acima da média mensal`)
console.log(`Os dias: ${acima} faturaram valores acima da média mensal`)