const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347089010395";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_25_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1WlBJZ0Z0THpvZ0drMkxCalBFWDY4bzhZUlFhdFA0ei9zdm5YcWg5QlY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvcGFmREN1RVRULVMya01ULVl0RVF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZkOTY2NWM5LWMwNzQtNDI2Mi04NjRmLTM3NDhmZDk3MTBiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMjEsXG4gICAgICA4MCxcbiAgICAgIDIwNyxcbiAgICAgIDQzLFxuICAgICAgMTM5LFxuICAgICAgMjM4LFxuICAgICAgMjMxLFxuICAgICAgMTE3LFxuICAgICAgMTc5LFxuICAgICAgMTE0LFxuICAgICAgNDUsXG4gICAgICAyMzMsXG4gICAgICAyMSxcbiAgICAgIDk5LFxuICAgICAgODIsXG4gICAgICAxMyxcbiAgICAgIDE3OCxcbiAgICAgIDIsXG4gICAgICA0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICAyNTIsXG4gICAgICAwLFxuICAgICAgMTgxLFxuICAgICAgMTIyLFxuICAgICAgMTE0LFxuICAgICAgMTQzLFxuICAgICAgOTYsXG4gICAgICAxMzAsXG4gICAgICA1LFxuICAgICAgNDIsXG4gICAgICAyMTEsXG4gICAgICA5NCxcbiAgICAgIDQ2LFxuICAgICAgMjMsXG4gICAgICAyMjAsXG4gICAgICAxNTgsXG4gICAgICAxODgsXG4gICAgICAxNDksXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1haR1hWWjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODkwMTAzOTU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNLkEgRGlnaXRhbCBDb25jZXB0XCIsXG4gICAgXCJsaWRcIjogXCIxOTgwMjMxNjMwODQ4OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIbG52c0NFSlBabjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWdTazFpSlM1dElqS2wyMlcrazNuS1lMN1RpeUhaeXNhZ1RzdFBKUk5uRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJieGZNbGkwVUhvNUd4N0xLcFBCSG9LV1NYdDJpQzlhMkYyUHhXdEYrU2ZTKzl5c3EvMDZBSzI4Y1BMSDI1ZmlNeGJrcXFMTlBDTWsxRzB6dWl4ME1DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHb2txc0xvdkFoL2swTWtpTnJyVjNmWTEvTTRYYjZGR0E3RS9FcFIzV243RXdnWUhiKzRRd2J4K0t6T2lYUWZWdnVBNFg1Mjl4ZllMRlQ0ZGtqVWRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg5MDEwMzk1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4MTExMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
