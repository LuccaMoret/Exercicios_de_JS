let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

calculo = 2023 - idade

resultado = ("Olá " + nome + " você tem " + idade + " anos ")

alert(resultado)

// Exercicio 1 do final da aula 3 

numero = parseInt(prompt("digite um numero "))

calculo2 = numero * 2
alert(calculo2)

// soma de dois numeros informados pelo usuario 

usuario = parseInt(prompt("digite um numero para ser somado"))
usuario2 = parseInt(prompt("digite outro numero para ser somado junto com o primeiro "))

calculo3 = usuario + usuario2

alert(calculo3)

// elevado ao quadrado

usuario3 = parseInt(prompt("digite um numero para saber ser elevado ao quadrado "))

calculo4 = usuario3 ** 2

alert(calculo4)

// notas reais 

usuario4 = parseFloat(prompt("digite a primeira nota"))
usuario5 = parsefloat(prompt("digite a segunda nota"))
usuario6 = parseFloat(prompt("digitte a terceira nota "))

calculo5 = usuario4 + usuario5 + usuario6 / 3;

alert(calculo5)

// soma dos numeros 

usuario7 = parseInt(prompt("digite um numero para ser somado"))
usuario8 = parseInt(prompt("digite o segundo numero para ser somado"))
usuario9 = parseInt(prompt("digite o terceiro numero para ser somado"))

soma = usuario7 + usuario8 + usuario9

alert(soma)

//area do triangulo 

base = parseFloat(prompt("digite a base do triangulo "))
altura = parseFloat(prompt("digite a altura do triangulo "))

area = (base * altura) / 2

alert(area)


