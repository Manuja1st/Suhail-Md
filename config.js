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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94741162824";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_02_07_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJodWU5U09qL1k3djRqR3MzTmlDb3dQYlJXL2xyUmdxZjNMdUYrWjBHS1pnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxMTYyODI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRTdFQzUxOTEwODZFRDREN0JDQjJBMTI0REM1M0ZDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczODA0NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUdwTnprTnRTbU9oTUJva2ZWZkdXUVwiLFxuICBcInBob25lSWRcIjogXCIwMjA3YTNmMi0wNmI2LTRiODctYTMwNS1jNTBlOTMzNjdhMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTk4LFxuICAgICAgMjcsXG4gICAgICAxNjMsXG4gICAgICAyNDAsXG4gICAgICA1OCxcbiAgICAgIDE0NixcbiAgICAgIDUsXG4gICAgICA0MixcbiAgICAgIDE3NSxcbiAgICAgIDE1OSxcbiAgICAgIDE3OSxcbiAgICAgIDEzMixcbiAgICAgIDIzOSxcbiAgICAgIDU4LFxuICAgICAgMjQyLFxuICAgICAgMTkwLFxuICAgICAgMTMxLFxuICAgICAgNTgsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA3MCxcbiAgICAgIDE0NixcbiAgICAgIDE2MSxcbiAgICAgIDc2LFxuICAgICAgNTUsXG4gICAgICAyNTUsXG4gICAgICAxMzYsXG4gICAgICAxMzEsXG4gICAgICA1MCxcbiAgICAgIDE0MyxcbiAgICAgIDEzOCxcbiAgICAgIDE0MyxcbiAgICAgIDE0NixcbiAgICAgIDI3LFxuICAgICAgMTAzLFxuICAgICAgMTM0LFxuICAgICAgMTA4LFxuICAgICAgMTAsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlZGRkc1RTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxMTYyODI0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzA5NjY1NjM5NjI5MTU6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwibWFudWphIHNhbmRlZXBhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWFha1pFR0VOaks5TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxWjFSak9qSVpyZjhjWEVsNUdQUkJLVWZYbWFobWZXRTN3SEFzYWVmMEJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxlWER6VDlhRGQ0SGpzVVpPR0E0MTFCV2tQV2tqWWU0WlREZXozd3U5RlE3aEtkeFQ1UXNrWGpIdzlHaFErR2NwcjYwc2dudUN0Z3VjRHBMRWUxL0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitGbTBZeEdFVTlDanh3TTFrVVZWM3Qzbmp2anlBazlJb0wySFFhaFZ2dmcxdFBTZlVjcDdsOVlTS0tXZUcwbmVjQmUyVTF3WXpyVkYxcVBjYTlrYWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxMTYyODI0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTczODA0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEUGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURQZC5qc29uIjogIntcImtleURhdGFcIjpcIm9HcXlrZkJaWVN6azdWbndPeWFBZzhSdFhSOCt2N0tKcitJT2g1UzRvR0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0NjU0NjE4MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
