# Bot de Figurinhas para WhatsApp

Este projeto é um bot para WhatsApp que permite criar figurinhas a partir de imagens enviadas no chat ou links diretos de imagens.

## Requisitos

Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- O aplicativo WhatsApp instalado e uma conta ativa

## Instalação

1. Clone este repositório:

   ```sh
   git clone (https://github.com/AlDuart/alistickerv1)
   cd sticker-bot
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione:

   ```env
   NUMERO=5599999999999  # Substitua pelo número do bot sem o 9 extra, se necessário
   ```

## Como Usar

1. Inicie o bot:

   ```sh
   node index.js
   ```

2. Escaneie o QR Code exibido no terminal com seu WhatsApp para autenticar o bot.

3. Use os seguintes comandos no WhatsApp:
   - **`!fig`** → Envie uma imagem ou um link direto de imagem para criar uma figurinha.
   - **`!comandos`** → Lista os comandos disponíveis.

## Dependências

O projeto utiliza as seguintes bibliotecas:

- [`whatsapp-web.js`](https://www.npmjs.com/package/whatsapp-web.js) → Para integração com o WhatsApp Web
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) → Para exibir o QR Code no terminal
- [`axios`](https://www.npmjs.com/package/axios) → Para fazer requisições HTTP e baixar imagens
- [`dotenv`](https://www.npmjs.com/package/dotenv) → Para gerenciar variáveis de ambiente

## Contribuição

Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request caso queira melhorar o projeto.

## Licença

Este projeto está sob a licença MIT.
