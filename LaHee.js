const { Attachment } = require("discord.js");
const fs = require("fs");
module.exports = {
  name: "La-Hee",
  description: "Song of my people",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync("./assets/sound/bgm_ex3_field_rak_day.mp3");
    const attachment = new Attachment(buffer, "bgm_ex3_field_rak_day.mp3");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  }
};