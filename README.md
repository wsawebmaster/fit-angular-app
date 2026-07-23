# FitAngularApp

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) versão 22.0.5.

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalação

No diretório do projeto, execute:

```bash
npm install
```

## Executar a aplicação

Para iniciar o servidor de desenvolvimento, rode:

```bash
npm start
```

Ou, alternativamente:

```bash
ng serve
```

Após o servidor subir, abra o navegador em:

```text
http://localhost:4200/
```

A aplicação será recarregada automaticamente sempre que você alterar os arquivos do projeto.

## Rotas

A navegação é configurada em `src/app/app.routes.ts`. Atualmente existem as seguintes rotas:

| Caminho | Componente | Descrição        |
|---------|------------|------------------|
| `/`     | —          | Rota raiz (app)  |
| `/1`    | `One`      | Componente Um    |
| `/2`    | `Two`      | Componente Dois  |

Links de navegação estão disponíveis na página principal (`app.html`) via `routerLink`.

Para adicionar uma nova rota:

1. Crie o componente (veja a seção abaixo).
2. Importe-o em `app.routes.ts`.
3. Inclua um objeto `{ path: '...', component: ... }` no array `routes`.

Exemplo:

```ts
import { Routes } from '@angular/router';
import { One } from './one/one';
import { Two } from './two/two';

export const routes: Routes = [
  { path: '1', component: One },
  { path: '2', component: Two },
];
```

## Build da aplicação

Para gerar a versão de produção, execute:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist/`.

## Testes

Para executar os testes unitários:

```bash
npm test
```

## Criação de componentes

Para criar um novo componente standalone, por exemplo um componente de login, execute:

```bash
npm run ng generate component Signin --standalone
```

Esse comando usa o Angular CLI disponível no projeto para gerar o componente com a configuração standalone.

### Diferença entre usar `npm run ng` e `ng`

Quando há apenas uma versão do Angular instalada no ambiente, o comando `ng` geralmente funciona diretamente. Porém, usar `npm run ng` pode ser mais seguro em projetos que já têm o Angular CLI configurado localmente via `node_modules`, pois ele garante que o comando será executado a partir da instalação do projeto.

## Recursos adicionais

Para mais informações sobre o Angular CLI, consulte a [documentação oficial](https://angular.dev/tools/cli).

---

## 👨🏻‍💻 Contato

<p style="padding-top:5px">
	<img src="https://avatars.githubusercontent.com/u/52001930?s=400&u=fb999c966c5c652a8357cbede4b1112e79cbfe18&v=4" alt="avatar" style="width:96px;height:96px;border-radius:50%;object-fit:cover;">

<p>&nbsp&nbsp&nbsp Wagner Andrade<br>
    &nbsp&nbsp&nbsp
    <a href="https://github.com/wsawebmaster">
      <img src="https://img.icons8.com/ios-glyphs/16/github.png" alt="GitHub" width="16" height="16" />&nbsp;GitHub
    </a>&nbsp;|&nbsp;
    <a href="https://www.linkedin.com/in/wsawebmaster">
      <img src="https://img.icons8.com/color/16/linkedin.png" alt="LinkedIn" width="16" height="16" />&nbsp;LinkedIn
    </a>&nbsp;|&nbsp;
    <a href="mailto:wsawebmaster@yahoo.com.br">
      <img src="https://img.icons8.com/ios-glyphs/16/secured-letter.png" alt="Email" width="16" height="16" />&nbsp;Email
    </a>
</p>
