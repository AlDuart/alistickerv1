const { Client, MessageMedia } = require('whatsapp-web.js');
const dotenv = require("dotenv")
const qrcode = require('qrcode-terminal');
const axios = require('axios');
const client = new Client({});
const numero = process.env.NUMERO;

dotenv.config()

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

//função para gerar a figurinha 
const generateSticker = async (msg, sender) => {
    if(msg.type === "image") {
        try {
            const { data } = await msg.downloadMedia();
            const image = await new MessageMedia('image/jpeg', data, 'image.jpg');
            await client.sendMessage(sender, image, {sendMediaAsSticker: true });
        } catch(e) {
            msg.reply("erro ao processar imagem");
        }
    }else{
        try{
            //somente link direto de imagem
            const { data } = await axios.get(imageUrl, {responseType: 'arraybuffer'});
            const returnedB64 = Buffer.from(data).toString('base64');
            const image = await new MessageMedia('image/jpeg', returnedB64,'image.jpg');
            await client.sendMessage(sender, image, {sendMediaAsSticker: true });
        } catch(e) {
            msg.reply("não deu pra criar a fig, mb");
           }
        }
    }

     //console.log(msg) ==> id pra implementar bot no grupo
client.on('message_create', msg => { 
    const command = msg.body.split(' ')[0];
    // zap do bot, sem o 9
    const sender = msg.from.includes(numero)? msg.to : msg.from 
    if (command === "!fig"){
         generateSticker(msg, sender);
        } else if (command === '!comando' || command === '!ajuda' || command === '!help' || command === '!comandos') {
            msg.reply("Comandos: !fig");
        }
    });


client.initialize()