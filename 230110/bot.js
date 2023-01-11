require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.botid;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const img = msg.text;
    // const period = data();

    // send a message to the chat acknowledging receipt of their message
    if (text == '안녕하세요')
        bot.sendMessage(chatId, '반가워요');
    if (text == '배고파요')
        bot.sendMessage(chatId, '밥먹어요');
    if (text == '잠와요')
        bot.sendMessage(chatId, '자세오');
    if (text == '??')
        bot.sendMessage(chatId, '??');
    if (text == '무요' || text == '무요?')
        bot.sendMessage(chatId, '정신나갈거같아요');

    // if (text == '봇저장해' + img) {
    //     img = 'AgACAgUAAxkBAANhY74NTrtRvuyVjXViFlpbzf1xyDoAAhO2MRsWwPBVfLdP9t1se'
    //     bot.sendPhoto(chatId, '저장되었습니다.')
    // }
    // if (img) {
    //     bot.sendPhoto(chatId, 'AgACAgUAAxkBAANhY74NTrtRvuyVjXViFlpbzf1xyDoAAhO2MRsWwPBVfLdP9t1se')
    // }
    console.log(msg)
});