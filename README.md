# Web Scrapping

Este projeto trata-se de um aplicativo de web scraping usando Node.js. O projeto utiliza diversas bibliotecas e tecnologias para coletar informações de páginas da web.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Body-parser
- Puppeteer
- MySQL
- TypeORM

## Instruções de Uso

Siga os passos abaixo para executar o projeto em sua máquina:

1. Navegue para o diretório do servidor:

```sh
cd server
```

2. Inicialize um novo projeto Node.js (caso ainda não tenha um arquivo `package.json`):

```sh
npm init -y
```

3. Instale as dependências necessárias, incluindo o Express, Body-parser, Puppeteer, MySQL e TypeORM:

```sh
npm install express body-parser puppeteer mysql typeorm
```

4. Execute o arquivo `index.js` para iniciar o aplicativo:

```sh
node index.js
```

## Funcionalidades

Este projeto realiza web scraping utilizando o Puppeteer para extrair informações de páginas da web. Os dados coletados são armazenados em um banco de dados MySQL utilizando o TypeORM para gerenciar as interações com o banco de dados. O Express.js é utilizado para criar uma API que pode ser acessada para iniciar o processo de web scraping e recuperar os dados coletados.
