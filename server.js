const TelegramBot = require('node-telegram-bot-api');
const token = '7933134174:AAFPHDrhP9XtN9VuUCfPVO0HkCnn23t4elg';  // توکن ربات تلگرام شما
const chatId = '2013760322';  // آیدی چت تلگرام شما

// ایجاد ربات
const bot = new TelegramBot(token, {polling: true});

// تابعی برای دریافت و ارسال زمان
function sendTime() {
    const currentTime = new Date().toLocaleTimeString();
    bot.sendMessage(chatId, `ساعت: ${currentTime}`);
}

// فراخوانی تابع هر دقیقه یکبار
setInterval(sendTime, 1000);

console.log('Server is running...');
