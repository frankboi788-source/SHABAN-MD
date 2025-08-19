const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERWRVM3N1g5STZ6eHhTWExLNkxaS3RzNmcrdElwdGZTSzNZVjI1V0FFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnFWTUtFZDZvMUdZenZSQUtGYkkxVExYUUE4SGRMMGJjM0lidDE4S1BScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSnJvbmtSaldkVytERkdTa2xnK2pnMFV4Q21NVnlGcFpiNXl6UTJ4R0VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6MTEwOEpHY3pyM3V4MENCZEszMjM5dkFodExTRDRQWDhqeU1TNnZWZ3hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDaFZNRURrYzNRZGZLaGQvRUdrSWcvaEVOaWR3ckpjMU5TMEE4YzBlMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ2K3R4RTVHZXpScC9yQVp6QmcwQi9KL3lOc0ZudEFJMS9EWTBZRlhESDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0R3N3ZRV0o1OUZHSmp1cVFndkExTnI3MWNnZHBnQjg0QlZJOWI2WXNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejYxUXQvc1hiQnhkZFdVMk81TjN5bTdXaUVDUEZyYllrTDB3R3AvV0RpRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh3aFl4cXNteS8vM3NIeGI5TjZtc0l1THVLOGFUNTluTnRCYys0c1BpMVBUR3Z1b2NQZTNEV0lxTDF3ZGdRenhzR2FodVpMYUE5OURUbDdtNUg2dkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJVcnRHbW5xaGpBT0tOMHBNSk9nSnljVFpqSFNaL3JPNlEwRWRlMU9QRTE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLTVZBMjVERyIsIm1lIjp7ImlkIjoiMjc3ODM1ODMwNjg6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZgfCdmY8gQm9pLCpGcmFuayAg8J2ZgfCdmY8g4LyGICDgvIYg8JODoCDwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKvwkpCr8JKQq/CSkKsiLCJsaWQiOiI1Nzk5NTUzMDY0MTUwOTozMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lYUndLWUJFSy8xajhVR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJVSnlyUjMvL1k5OXVZRXp3RmRyK0k3b0ZScEg2S3RPS3F2Y1VONmozRjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRMdmFoSFhwY1lDZEFhejZnUkNmNVpnMURaM2J3a3FkSnFBQ2lnS1hvNm5Dd2VoREZ0ZVBhL2kwVTNCb0FqLzZTR0M1aVZqMkpmTWQ1bURQd2dBUUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPMElDODFqcy8yK041ZGJVdDZzVlhLYmdzNC96MlpYRDMvVFh2d2V5eVp5eEIyVW9QZ2RITndZazBzcXplaGR4VHppY0VmYlNkWFBEMHZaZEVyZ3dDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzgzNTgzMDY4OjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRsQ2NxMGQvLzJQZmJtQk04QlhhL2lPNkJVYVIraXJUaXFyM0ZEZW85eGQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU3NzAxMSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQVmQifQ==",
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
