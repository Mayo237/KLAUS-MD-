// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"6BE8TL+YwtapjhmiMaee1AoDDKv4TicTIFIubqdDyUA="},"public":{"type":"Buffer","data":"e+9U71kjIV8Xzwywjb8AIPAD4eLqwjxogPMfFK8+vgk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YEVXiv4DmApgHT7SVj23tUARkn2AuBNygEYNlGrs/0w="},"public":{"type":"Buffer","data":"RcJW6d0aAOS+BZOyc+UVZdx3+OwoSWNQRr1bY8OjDSU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"QPPHY+H1wffaEYUETyfYNQejJBM5OwUVQUUpQPxDTl4="},"public":{"type":"Buffer","data":"ij1pEz+OtOJT4LUruF29Tb8R4Y/Ms4d5w/lfzSR/Um4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SDXUQm7Zqmnw3Vj3IlYJpQ+rDrA8vs1DWaZx2zUdRX8="},"public":{"type":"Buffer","data":"rU3B8emqaa4+dA0rl3Bg65ob2TE+mQ/gtbhI39CAVDk="}},"signature":{"type":"Buffer","data":"WCGgyC//oZ7jgMiSLTIDV5wKI9XH0r0iqSjFFBm1juwyyTuZFa2yfKVNON77JLD1maon7cHBl/GEDeOon7FmAA=="},"keyId":1},"registrationId":226,"advSecretKey":"snNFEg1UoXPaLjPLhsvmgpfQFuDXrGDeORwQc7A5Ss8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"8tWO9q_hRPKEIAlbiHEShw","phoneId":"1d2efa31-b769-4c92-9516-7021716134fe","identityId":{"type":"Buffer","data":"UjvsKgl+ejin/w63gFoHox1y6aw="},"registered":true,"backupToken":{"type":"Buffer","data":"Ol0LQD2acr85A5kluulUl6CdQcU="},"registration":{},"pairingCode":"MSMAZ6S2","me":{"id":"237683609393:21@s.whatsapp.net"},"account":{"details":"COGSlIkBELiX0rgGGAEgACgA","accountSignatureKey":"OPWMvEGB0xMlimt20MT4DZWJ/438Ka8mCrkcyx5fNWw=","accountSignature":"zO2i2Kom7kmdTDNZ9S+x3sl1h5lqL64z2r6zHEyOgK4ng3WPFqaoUDviYK6sit60STUO7f/Hs8v9LLxPayZqCQ==","deviceSignature":"0MwCkg1Nk1ONRKGZ6jtD5/MGdn0nMCIZfZrdEN0DKR5ZiVgRQgHBRUkso+owu/JTomNVzvHcldYiDbpw+G/JDQ=="},"signalIdentities":[{"identifier":{"name":"237683609393:21@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTj1jLxBgdMTJYprdtDE+A2Vif+N/CmvJgq5HMseXzVs"}}],"platform":"android","lastAccountSyncTimestamp":1729399740,"myAppStateKeyId":"AAAAAG9n"}",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : true,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || " 𝙎-𝙏𝞢𝞜",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "50931461936",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
