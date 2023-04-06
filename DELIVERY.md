# Entrega

## Projetos e artigos

Coloque aqui projetos e ou artigos que já desenvolveu, trabalhou ou escreveu.

---

## Nos deixe um feedback

Nos conte o que achou dos exercícios, se ficou com alguma duvida durante o desenvolvimento, fique a vontade!

---

## Sobre o desafio

Hoje na Serasa utilizamos várias tecnologias e queremos sempre inovar e melhorar, e com isso queremos que você navegue na [área logada do site da Serasa](https://www.serasa.com.br/area-cliente), e após descreva quais tecnologias, frameworks, padrões de código e arquiteturas, enfim, o que você achar que faz mais sentido utilizarmos e porque. Não é necessário que você tenha experiência com a tecnologia proposta, só queremos saber o que você imagina como arquitetura ideal.

## Sobre o exercício

Na sua arquitetura proposta precisa levar em consideração alguns problemas e desafios que enfrentamos: volumetria, baixo tempo de carregamento das páginas, melhor experiência para o consumidor, além de trabalhar com um time de mais de 20 frontends em um mesmo projeto. Para esse exercício você pode nos entregar um [markdown](../DELIVERY.md) sobre a sua arquitetura, tecnologias e práticas.

---

## Tecnologias

- **Stack**: Next.js (Front-end) + NestJS (Back-end)
- **Estratégias**: Monorepo
- **Estrutura de organização**: monorepo
- **Linguagem**: Typescript
- **Base**: Preact (Typescript)
- **Estilo**: CSS Modules (com .SCSS) + BEM & OOCCSS
- **Testes**: Vitest + React-Testing-Library (w/ Istanbul coverage support)
- **Linter**: ESLint + Prettier + commitlint + lintstaged + husky
- **Package Manager**: Yarn
- **Documentação**: Storybook + JSDocs + standard-version (CHANGELOG.md auto-generator)
- **Monitoramento**: Google Analytics
- **CI/CD**: SonarQube
- **CDN**: S3 + Cloudfront

### Explicação

Por manter um ecossistema javascript, a combinação de Next.js e NestJS permite que os desenvolvedores trabalhem em um ambiente unificado e consistente com TypeScript em ambos os lados, reduzindo a curva de aprendizado e facilitando a colaboração, além de estar sob as mesmas ferramentas de linting (ESLint e Prettier), que ajudam bastante a manter um estilo de código consistente e a evitar erros comuns.

Além disso, com uma estrutura de monorepo, o gerenciamento de dependências e o compartilhamento de código entre projetos se torna mais fácil pra se encontrar e reutilizar componentes e funções comuns, aumentando o reuso de código, duplicação e melhorando a manutenção também, e até mesmo a escrita de testes com Jest/Vitest e React-testing-library, promovendo maior confiabilidade e garantindo a qualidade do que já foi desenvolvido.

Sobre a estilização, acredito que fazendo uma combinação entre CSS Modules com SCSS e metodologias BEM e OOCSS, é possível ter um ambiente sem conflitos de CSS, com uma organização clara, modular e de fácil manutenção.

E pra documentar, o Storybook é uma ferramenta muito potente, que sendo combinada com JSDocs, standard-version e lintstaged, é possível aumentar o detalhamento dos componentes e suas propriedades, além de automatizar a escrita do CHANGELOG, que é o documento que centraliza de forma clara as mudanças realizadas entre cada versionamento do sistema através dos commits realizados.

Em resumo, acredito que essa combinação de tecnologias oportuna em uma fácil colaboração entre o time, maior eficiência, qualidade e escalabilidade, mantendo uma fácil manutenção e documentação organizada, resultando em um produto final mais confiável e de melhor desempenho, melhorando a experiência do usuário e a satisfação do cliente.
