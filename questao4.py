
#4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

#SP – R$67.836,43
#RJ – R$36.678,66
#MG – R$29.229,88
#ES – R$27.165,48
#Outros – R$19.849,53

#Escreva um programa onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

sp = float(67.83643)
rj = float(36.67866)
mg = float(29.22988)
es = float(27.16548)
out = float(19.84953)
soma = float(sp + rj + mg + es + out)

psp = ((sp/soma)*100)
prj = ((rj/soma)*100)
pmg = ((mg/soma)*100)
pes = ((es/soma)*100)
pout = ((out/soma)*100)

print('Porcentagem de SP {:.2f}%'.format(psp))
print('Porcentagem de RJ {:.2f}%'.format(prj))
print('Porcentagem de MG {:.2f}%'.format(pmg))
print('Porcentagem de ES {:.2f}%'.format(pes))
print('Porcentagem de OUT {:.2f}%'.format(pout))
