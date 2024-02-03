# CleanDog


Projeto que analisa o melhor petshop para dar banho no seu doguinho :dog: a partir da entrada do usuário.

⚙️ [Back-end do projeto](https://github.com/mialuzmia/cleanDog-backend)

## 💻 Como rodar o projeto

- Antes de tudo, verifique se você tem a versão mais recente do node e npm no seu computador.

Agora clone o projeto na sua máquina com o comando:
```
    git clone https://github.com/mialuzmia/cleanDog-frontend
```
Depois, instale as dependências necessárias com: 
```
    npm install
```
:rocket: Agora está tudo pronto, só falta rodar o projeto com o comando:
```
    npm run dev
```

## :thought_balloon: Premissas assumidas do projeto

 - Todos os petshops cadastrados estarão abertos no dia escolhido pelo usuário
 - Todos os preços dos petshops estão atualizados


## :clipboard: decisões de projeto

 - Foi escolhido o framework React para desenvolver o front end do projeto, Node.js com Express para o back end e o MongoDB como database. Também foi usado SASS para estilização.
 - Foi criado um hook customizado para fazer as requisições get. A logíca para o cálculo do melhor petshop também foi encapsulada na pasta /utils.
 
## :chart_with_upwards_trend: Ideias de melhorias futuras para o projeto:

 

 - [ ] Criar uma homepage explicando a ideia do projeto.
 - [ ] Criar um formulário para adcionar mais petshops e atualizar os cadastrados.
 - [ ] Página com todos os petshops cadastrados.

