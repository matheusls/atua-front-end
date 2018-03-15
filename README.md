# Teste para a vaga de Desenvolvedor Front-end na Atua
Este é o repositório para o projeto realizado como teste de Desenvolvedor Front-end da [Atua](http://www.atua.ag/).

## Produção
A versão de produção encontra-se na pasta "dist" do projeto e pode ser conferida online [aqui](https://matheusls.github.io/atua-front-end/).

## Desenvolvimento
Primeiramente, para rodar a versão de desenvolvimento localmente, é preciso ter o [Node.js](https://nodejs.org/en/) instalado, bem como o [Gulp](https://gulpjs.com/) instalado globalmente. A versão utilizada do Node.js é a 9.8.0, e o Gulp pode ser instalado globalmente executando os comando `$ yarn global add gulp` ou `$ npm install -g gulp`.

Então, no terminal, clone o projeto, navegue até a pasta dele e execute `$ yarn` ou `$ npm install` para instalar as dependências do projeto. Finalizada a instalação, apenas execute `$ gulp watch` para iniciar o servidor local.

## Bibliotecas & Frameworks
A única biblioteca externa utiliza é a [Normalize.css](https://necolas.github.io/normalize.css/).

## Tecnologias utilizadas
* [Gulp](https://gulpjs.com/) - automatização de tarefas;
* [Babel](https://babeljs.io/) - transpilação de ES6 para ES5;
* [Sass](https://sass-guidelin.es/pt/) - pré-processador de CSS;
* [Browsersync](https://browsersync.io/) - live reload do navegador.
