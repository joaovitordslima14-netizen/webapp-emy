# WebApp Fofo

Este é um webapp simples em HTML, CSS e JavaScript que mostra um slideshow de fotos no fundo, exibe datas importantes em destaque e pede login para acessar o conteúdo.

## Como usar

1. Abra `index.html` no navegador.
2. Faça login usando as credenciais definidas em `script.js`.
3. Depois de logado, clique em **Mostrar mensagem** para ver o texto e a foto especial.

## Personalização

- Altere o login em `script.js` no objeto `VALID_CREDENTIALS`.
- Troque as datas em `index.html` dentro dos elementos `.date-card`.
- Substitua `specialPhotoUrl` e `messageText` em `script.js` para ajustar o conteúdo mostrado.
- Para usar as imagens que você enviou, coloque os arquivos na pasta `images/` com os nomes `foto1.jpg` a `foto10.jpg`.

## Hospedar no Render

### Passo 1: Preparar o projeto
1. Certifique-se de que todos os arquivos estão na pasta do projeto:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `package.json`
   - `images/` (com todas as fotos)

### Passo 2: Criar repositório Git
1. Abra o terminal na pasta do projeto
2. Execute os comandos:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```

### Passo 3: Hospedar no GitHub
1. Crie um novo repositório no GitHub
2. Conecte seu repositório local:
   ```
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

### Passo 4: Deploy no Render
1. Acesse [render.com](https://render.com) e faça login
2. Clique em "New +" e selecione "Static Site"
3. Conecte seu repositório GitHub
4. Configure as seguintes opções:
   - **Build Command**: `npm run build` (ou deixe vazio se não precisar)
   - **Publish Directory**: `./` (raiz do projeto)
   - **Node Version**: 18 ou superior
5. Clique em "Create Static Site"

### Passo 5: Acessar o site
Após alguns minutos, o Render fornecerá uma URL pública (ex: `https://seu-app.onrender.com`) onde você pode acessar o webapp de qualquer lugar.

## Alternativas de hospedagem

Se preferir outras opções:
- **GitHub Pages**: Gratuito, mas sem domínio customizado
- **Netlify**: Similar ao Render, com deploy automático
- **Vercel**: Boa opção para projetos estáticos

Pronto! Seu webapp estará online e acessível de qualquer máquina.
