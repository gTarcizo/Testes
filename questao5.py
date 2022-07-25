#5) Escreva um programa que inverta os caracteres de um string.

#IMPORTANTE:
#a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
#b) Evite usar funções prontas, como, por exemplo, reverse;

palavras = str(input('Digite algo: '))
string = palavras[::-1]
print('A frase digitada ao contrário fica: {}'.format(string))