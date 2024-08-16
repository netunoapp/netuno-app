const Command = require("../../../base/Command");
const CanvasUtil = require("../../../helpers/Canvas");
const { loadImage, createCanvas } = require("canvas");

module.exports = new Command("border genderfluid", async ({ t, interaction }) => {
  const image = interaction.data.options.getString("image-url", true);

  if (!image || !(await CanvasUtil.validImage(image))) {
    interaction.createFollowup({ content: t["!image"] });
    return;
  }

  const canvas = createCanvas(500, 500);
  const ctx = canvas.getContext("2d");

  const background = await loadImage(await CanvasUtil.round(image));
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const border = await loadImage(
    await CanvasUtil.round("./assets/images/border/genderfluid.png")
  );
  ctx.drawImage(border, 0, 0, canvas.width, canvas.height);

  interaction.createFollowup({
    files: [
      {
        name: "border.png",
        contents: canvas.toBuffer(),
      },
    ],
  });
});
