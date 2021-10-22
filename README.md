
# Boas vindas ao repositório do projeto Timer Pomodoro!

## Desafio proposto
Crie uma aplicação web em ReactJS ou React Native com os seguintes requisitos:

A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por
Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o
trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por
intervalos curtos - 5 minutos.

Porém, buscando uma maior praticidade para a avaliação, os temporizadores
deverão estar em segundos e não em minutos. Ou seja, os 25 minutos de duração
deverão ser 25 segundos e os 5 minutos de intervalo deverão ser 5 segundos.

Aplicativo deverá conter:

- Um temporizador para demonstrar o tempo de duração da atividade e do
intervalo (deve haver um feedback visual para distinguir duração da atividade
e duração do intervalo);
- Um botão para pausar o temporizador;
- Um botão para zerar o temporizador (lembrando que o ponto inicial do
temporizador são os 25 segundos).
- Configuração de tempo personalizada com TimePicker (esse componente
deve ser feito do 0, podendo utilizar lib auxiliar como moment).

Adicionais (opcional, mas contam pontos 😉):

- Adicionar um gráfico que demonstra a redução do tempo;
- Adicionar um feedback sonoro para quando o tempo da atividade terminar;
- Disponibilizar a página para utilização (deploy).

---

## Consideração sobre o desenvolvimento

Realizar desafios é sempre divertido e gratificante, relembrando conceitos e ferramentas.

Como utilizar o temporizador:

- Coloque o tempo total da tarefa que você pretende realizar e inicie o contador.

Existe um aviso sonoro quando inicia a etapa de `realizar a atividade` e a etapa de `descanso`, além de uma indicativo visual para ambas as etapas,
ao final do tempo existem ambas os indicativos também, porém com um bônus de uma `música relaxante` a fim de compensar o trabalho realizar.

`Obs: vale lembrar que diferente do pomodoro real, o tempo da atividade e de descanso foram reduzidos para facilitar avaliação, porém logo após esse processo será corrigo`

Qualquer dúvida ou sujestão não deixa de me contatar :grin:

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _fabiomcjr@hotmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos-fabio
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos-fabio
  git clone git@github.com:FabioMarturanoJr/desafio-pomodoro.git
```

3. Entre no diretório do projeto e instale as dependencias:
```javascript
  cd desafio-pomodoro/
  npm i
```

5. inicie o projeto:
```javascript
  npm start
```  
---

### Deploy

  https://fabiomarturanojr.github.io/desafio-pomodoro/
