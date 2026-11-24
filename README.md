# Portfólio coletivo da turma

Template da Equipe Base (Equipe 06) para o Desafio Integrador de Desenvolvimento Web. Frontend puro em React + Vite, com React Router e CSS. A publicação será feita na Vercel pelo repositório da turma.

## Rodar e compilar

Requisito: Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. Para validar a integração: `npm run build`.

## Regra de colaboração

A `main` é a versão integrada. Apenas a Equipe Base integra os pull requests nela.

```bash
git switch main
git pull origin main
git switch -c feat/equipe-XX
```

Cada equipe altera exclusivamente `src/teams/equipe-XX/` e a própria entrada em `src/data/teamsConfig.js`. Não altere dependências, App.jsx, estilos globais ou componentes compartilhados sem combinar com a Equipe Base.

## Adicionar a página de uma equipe

1. Copie `src/teams/_modelo/` para `src/teams/equipe-XX/`.
2. Renomeie o componente e o prefixo CSS `equipe06` para o identificador da sua equipe em ambos os arquivos. Isso evita colisões de estilos.
3. Preencha vídeo via URL de embed (YouTube/Vimeo), referência, descrição, uso de IA, apresentação do grupo e fichas dos membros. Não publique dados fictícios como se fossem reais.
4. Em `teamsConfig.js`, edite somente seu objeto: nome, categoria, descrição e `ready: true`. Para novos grupos, adicione uma entrada com `id`, `number`, `name`, `category`, `description` e `ready`.
5. Exporte o componente como `default` no `index.jsx`. A rota `/equipes/equipe-XX` será carregada automaticamente por `import.meta.glob`.
6. Execute `npm run build`, faça commit e abra um pull request para a Equipe Base.

Exemplo de ficha no array `members` da página:

```js
{ name: 'Nome completo', role: 'Layout e interface', skills: 'React e CSS', bio: 'Mini-bio do integrante.', url: 'https://github.com/USUARIO' }
```

A URL profissional é opcional. O vídeo deve usar uma URL de embed, por exemplo `https://www.youtube.com/embed/ID_DO_VIDEO`. Evite vídeos pesados no Git. Cada equipe pode incluir arquivos e páginas internas na sua pasta; use caminhos relativos à rota da equipe para navegação interna.

## Estrutura

```text
src/
  components/        Header, Footer e proteção de erro das páginas
  data/teamsConfig.js
  pages/             Home e carregamento central das equipes
  teams/
    _modelo/         Exemplo copiável, não é registrado como equipe
    equipe-06/       Página da Equipe Base
  App.jsx
  main.jsx
  styles.css         Estilos compartilhados, mantidos pela Equipe Base
```

As equipes 01 a 05 são espaços reservados, não entregas concluídas. A página da Equipe 06 apresenta o MedTrack e os integrantes com suas responsabilidades; não inclui bloco de vídeo. A lista pode ser ampliada ou reduzida conforme a turma.

## Publicar na Vercel

A Equipe Base deve importar este repositório, selecionar Vite, build `npm run build`, saída `dist` e branch de produção `main`. O `vercel.json` prepara o acesso direto às rotas. Os pushes integrados na `main` disparam novos deploys após a conexão do projeto à Vercel. Nenhuma publicação foi configurada automaticamente por este template.

O repositório é privado inicialmente. Convide os colegas em Settings → Collaborators antes de compartilhar o fluxo de integração; ter o link não concede permissão de push.


## Cards de projetos

A home apresenta seis logos, em ordem, com o MedTrack por último. No desktop, a grade
é de três colunas por duas linhas; em telas menores, adapta-se para duas ou uma coluna.
O clique abre um diálogo com descrição, protótipo e acesso ao deploy. Escape, botão de
fechar e clique fora da janela permitem retornar à vitrine.

Cada entrada em `teamsConfig.js` inclui `logo`, `prototype`, `prototypeAlt`,
`prototypeCaption` e `deployUrl`. As equipes 01 a 05 usam marcas provisórias e não
possuem links de deploy inventados. A imagem do MedTrack é uma captura real da homepage publicada.


## Identidade visual

A vitrine utiliza a logo horizontal da Universidade de Fortaleza, obtida no site
institucional: https://unifor.br/o/unifor-theme/images/unifor-logo-horizontal.svg.
O arquivo original está em `public/brand/unifor.svg`, sem redesenho ou alteração de cores.
A aplicação é um projeto acadêmico da turma.
