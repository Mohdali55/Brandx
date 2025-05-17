const fs = require("fs");
module.exports.config = {
        name: "BYE",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "Brand", 
        description: "THIS BOT IS ARYAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("assalamualaikum") ||
     react.includes("asslam walikum") || react.includes("Assalamualaikum") || react.includes("Aslam") ||
react.includes("Assalam alaikum") ||
react.includes("assalamualaikum")) {
                var msg = {
                                body: `──────────────────\n\nWalekum Aaslamu  Wa Ramutllha Barkatu 😇\n──────────────────\n𝐎𝐰𝐧𝐞𝐫 ➻  💐⤾➝BRAND↬ X⤹❤️‍🩹🙂⇣💐─`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤲", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
