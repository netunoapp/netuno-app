const Command = require("../../../base/Command");
const { createCanvas, loadImage, registerFont } = require("canvas");

module.exports = new Command("meme laranjo", async ({ interaction }) => {
  let text = interaction.data.options.getString("text", true);

  await registerFont("./assets/fonts/Arial.ttf", {
    family: "Arial",
  });

  const canvas = createCanvas(685, 494);
  const ctx = canvas.getContext("2d");

  const background = await loadImage("./assets/images/memes/laranjo.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#000";
  text = text.match(/.{1,50}/g);
  ctx.fillText(`${text}`, canvas.width / 50.9, canvas.height / 15.9);

  interaction.createFollowup({
    files: [
      {
        name: "laranjo.png",
        contents: canvas.toBuffer(),
      },
    ],
  });
});
