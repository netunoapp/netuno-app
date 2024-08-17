const Command = require("../../../base/Command");
const CanvasUtil = require("../../../helpers/Canvas");
const { createCanvas, loadImage } = require("canvas");

module.exports = new Command(
  "filter desaturate",
  async ({ interaction, t }) => {
    const image = interaction.data.options.getString("image-url", true);

    if (!image || !(await CanvasUtil.validImage(image))) {
      interaction.createFollowup({ content: t["!image"] });
      return;
    }

    const level = interaction.data.options.getInteger("level", false) ?? 80;

    const canvas = createCanvas(500, 500);
    const ctx = canvas.getContext("2d");

    const background = await loadImage(image);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.width);

    await CanvasUtil.desaturate(ctx, level, 0, 0, canvas.width, canvas.height);

    interaction.createFollowup({
      files: [{ contents: canvas.toBuffer(), name: "image.png" }],
    });
  }
);
