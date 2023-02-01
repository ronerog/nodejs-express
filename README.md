# API - Nodejs, Express

Utilizando o Node.js com o framework Express para criar uma aplicação C.R.U.D. - de criação, leitura, atualização e remoção de dados.

## Instalação

1. Clone este repositório:
`~$ git clone git@github.com:ronerog/nodejs-express.git`
2. Acesse a pasta do projeto:
`~$cd soccer-team-manager`
3. Instale as dependências:
`npm install`

## Uso

1. Inicie a aplicação utilizando o nodemon, para que a mesma possa ser atualizada sem a necessidade de reiniciar manualmente o servidor a cada modificação:
`npm run dev`
2. Pronto! A aplicação estará disponível em http://localhost:3001/teams. Caso a porta em questão já esteja sendo utilizada, surgiro que modifique no arquivo `server.js` a linha de comando `app.listen(3001, () => console.log('server running on port 3001'));` substituindo o `3001` por qualquer outra porta disponível.
3. Para uma melhor visualização de como funciona a aplicação, sugiro que utilize a extensão [Thunder Client](https://www.thunderclient.com/) disponível para o VSCode.
Com esta extensão você poderá testar a aplicação utilizando os métodos GET, POST, PUT e DELETE.
