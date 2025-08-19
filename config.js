const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEY3RFpsOG91akJKNHZEZVUvRjVaYmJsS2dqaXVpVVc4cTE2MTZTMkFudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1ZoOUx5NHB1M2NCNVkzYlVBdENXWGJ3bk4vNTVxdjh0d1drc1BnQ3ZHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS1BGT3FPQ1lKcWNKbTlodlQyMXFhdGplUkEzUW1UeUN2c3FnUFBMRUhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSys3Sng0RlNta2xsMGpUNkRKeGJ1a1NMd0dsMS85cmtTN1M3NExJdzBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFOGFYYXNydWR3MXJMSEkrU2ExOC8xYUZrT0VTMlR1SCthZXEzU29aMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9rbVVIN0tPTzdmSTZKVkl3eERWWFJGQmg4WEYvU1ZCSTlhYTdNR0NGa0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtYY0szS3FiSDdkWGxZVDVleW9YSWRPQ1NYN1R1anYvYWpFR2k2VDBHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3dtdHRXc0FaWXIzamt1UC9HSFZramNlMHA0RlBwbVJLWmlMZklSNzBscz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpQYnB0ekFYWGxHbTRlQ09PaU0vcEJEa3NDU0ZJRk5iRDZsb2RTenlqZ01hS2MreUxkTld6SG96d0xNUDVrUlk0ald3SVhCZ2RTd2ZiQmpqbEwxakJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6ImVTcllDVzFoY0EwTVVKNjMxaHE3SFR3aHQ4SzFJckdiVU5GM3RnMjZXZ289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IktMNUREWUVGIiwibWUiOnsiaWQiOiIyNzc4MzU4MzA2ODozNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmB8J2ZjyBCb2ksKkZyYW5rICDwnZmB8J2ZjyDgvIYgIOC8hiDwk4OgIPCSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQqyIsImxpZCI6IjU3OTk1NTMwNjQxNTA5OjM2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVhSd0tZQkVJV3Brc1VHR0JNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlVKeXJSMy8vWTk5dVlFendGZHIrSTdvRlJwSDZLdE9LcXZjVU42ajNGMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSWNEai8wWmNPMHFpZzVZQW5CQkx6UHNoSDlMUldZdXVCTm43YmtyU0V3ZURPZkphejBrTWZMdnBVSTVuYTZaeUpOM2RySjNQQW5VL1RJL01tVXVOQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjNLTXBpTElYZnpMMWw5UFB3MkpIcmVZM1hEUVkwMk42dWZyNEhVTlRMUEllM0tIN0YyUVpRNnZ1Ky9nbVo0T0lsbUIwSGx0U0xLelpWTmhMRWpWd0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3ODM1ODMwNjg6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGxDY3EwZC8vMlBmYm1CTThCWGEvaU82QlVhUitpclRpcXIzRkRlbzl4ZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NjE2MzkyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBWbCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/8nsF9BNH/shaban-md.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠 V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫𒐫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27783583068",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/FLjwjGqd/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝙁𝙏 Boi,*Frank  𝙁𝙏 ༆  ༆ 𓃠*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
