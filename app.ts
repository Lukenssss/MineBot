import Mineflayer from 'mineflayer'

const bot = Mineflayer.createBot({
    username: 'NasheBot',
    host: 'losquenoentienden.aternos.me',
    port: 30303,
    version: false,
})

bot.on('chat', (username, message) => {
    bot.chat(`El ${username} esta en la sala paaa`)
})