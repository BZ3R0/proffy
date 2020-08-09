// Iniciar o projeto
// yarn init -y

// instalar o typescript como dependencia de desenvolvimento
// yarn add typescript -D

// criar o arquivo de configurações do typescript.
// yarn tsc --init ----- gera automaticamente o arquivo tsconfi.json

// No arquivo tsconfig.json, mudar a variavel target para es2017, isso quer dizer que é o typescript vai converter as funcionalidades que são aceitas até o ano de 2017, porque o Node só entende até 2017

// instalar yarn add ts-node-dev -D "executa o servidor e restartar se tiver alguma alteração no script"

# criar a sessão scripts, como abaixo em package.json
"scripts": {
    "start" : "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:migrate:rollback": "knex --knexfile knexfile.ts migrate:rollback",
  },

# Instalar
- yarn add express
- yarn add @types/express -D
- yarn add knex sqlite3 //knex é a orm
- yarn add cors // permitir que aplicações em outros endereços acessem o backend
- yarn add @types/cors -D

instalar o insominia.rest para fazer teste da api

# Funcionalidades

## Conexões

- Rota para listar o toal de conexões realizadas;
- Rota para criar uma nova conexão;

## Aula
- Rota para criar uma aula;
- Rota para listar aulas;
    - Filtrar por matéria, dia da semana e horário;