const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0t3WVMwbTZvVkxYT3o1NmhqekQ4ck5DQUdPeG5BYXplM1g1RlJ3TnNGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01TakZaWjUwZFo3czF0YU12dDVzYlI2bFRnSHltdnhsM01JWUNlejNuZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TDM4T0wyYWhaSm5mYmc1OFlCWTdEcStUQTlxdzIrQThZNEdGNW4xL1dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVmRGTWVaclJWUDhTODZaR1BsZnFxMzAwTmpRK01BVGhTdlR3WGluRUVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMalA2eXM2NjlNTGxJODN0OHlvY05iVytrT3doY2Z1RWlwVUhjMjA5bm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUwV1JkUkpUMTU2U081L1c1WGU0cDlGQ1NXaUdSa3h6MENZSWsrSTRnV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVDYWN4NXpEWlBKN244dVpPQnJ5QnFSMHM3YWRaYU1aUGFpNmNmOVFHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYi9FSURCWHhWcEpCYkJGcUNyT01OOGlKL0ZCNWFwM1RBQlF2a1gzTDBDVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpsYU9LMU93Rk85aUtsZ3BLOCtqN09TVUpIcm5Fc0p3TW9LaE9VbmpLVGVyalNpZW90eWJjcUQ4Z3J0YTlJL2FvMWpDdk40Qlo1Z2twWWs4ZXF0d0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiWWlWTjVpSHhhVHBxb1JZc1EyTTc3KzVqZVM0UFpGVWxtL2hNVGlrd21xaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVDhWRTlaNTQiLCJtZSI6eyJpZCI6IjI3NzgzNTgzMDY4OjM5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmYHwnZmPIEJvaSwqRnJhbmsgIPCdmYHwnZmPIOC8hiAg4LyGIPCTg6Ag8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCrIiwibGlkIjoiNTc5OTU1MzA2NDE1MDk6MzlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJYlJ3S1lCRU5LQms4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyVUp5clIzLy9ZOTl1WUV6d0ZkcitJN29GUnBINkt0T0txdmNVTjZqM0YwPSIsImFjY291bnRTaWduYXR1cmUiOiJLTDNvbVVZVFZSTXp2NUU1NjREVlJJc01ZeEdxKzJycVo0UDN2SlY2Z3kzbXNzb1JReWpWdVE4VWZXMWpkL3NaNk02WHJReWVDTmIzRDNRRHZHRXVBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieDR1TmlDZjZwRjJleDRya3BOK2lQU0VhM3ZLWHlaVmxhcW9wL3NDQTJNNHBCTkdXcjF4TDl6SWtyM2pFdVE3TFQrdHI0WTRoOVg4eld4WVlmcjFnQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc4MzU4MzA2ODozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbENjcTBkLy8yUGZibUJNOEJYYS9pTzZCVWFSK2lyVGlxcjNGRGVvOXhkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2Mjc3MzQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlZpIn0=",
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
