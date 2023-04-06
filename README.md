# Projeto React + Vite + TypeScript

Formulário de coleta de feedback utilizando o Serasa Design System.

### Tecnologias utilizadas

- **Base**: React (Vite + Typescript)
- **Style**: SASS modules (BEM)
- **Tests**: Vitest w/ react-testing-library (w/ Istanbul coverage support)
- **Linter**: ESLint + Prettier + commitlint + lintstaged
- **Docs**: Storybook + JSDocs + standard-version (CHANGELOG.md auto-generator)
- **Package Manager**: Yarn
- **Bônus**: Docker, Axios, Husky, Nginx, NodeJS

### Inicialização Rápida com Docker

Execute o seguinte script para inicializar o projeto rapidamente:

```
docker-compose build --parallel && docker-compose up --remove-orphans
```

### Scripts disponíveis

Neste projeto, você pode executar os seguintes scripts:

#### Principais

`yarn dev`\
Inicia o servidor de desenvolvimento Vite. Abra http://localhost:3000 para visualizar no navegador.

`yarn coverage`\
Gera o relatório de cobertura de código com Vitest.

`yarn storybook`\
Inicia o servidor do Storybook na porta 6006.

#### Outros

`yarn test`\
Executa os testes com Vitest.

`yarn build`\
Compila o projeto TypeScript e realiza o build para produção utilizando o Vite.

`yarn preview`\
Inicia o servidor Vite para visualizar a versão de produção do projeto.

`yarn prepare`\
Instala os hooks do Husky.

`yarn lint`\
Verifica o código com o TypeScript e o ESLint.

`yarn prettier:write`\
Formata o código utilizando Prettier.

`yarn release`\
Cria uma nova versão do projeto utilizando Standard Version.

`yarn release:minor`\
Cria uma nova versão minor do projeto utilizando Standard Version.

`yarn release:patch`\
Cria uma nova versão patch do projeto utilizando Standard Version.

`yarn release:major`\
Cria uma nova versão major do projeto utilizando Standard Version.

`yarn build-storybook`\
Realiza o build do Storybook para produção.
