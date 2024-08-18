const Command = require("../../src/base/Command");
const UserModel = require("../../src/database/models/UserModel");

module.exports = new Command("daily", async ({ author, interaction }) => {
  let daily = new Date().toLocaleDateString("en-US");

  console.log(daily);

  let money = getAmount(2500, 4500);
  let data = await UserModel.findOne({ userdata: { id: author.id } });

  if (!data) {
    data = await UserModel.create({
      userdata: {
        id: author.id,
      },
      economydata: {
        dailycooldown: daily,
        money,
      },
    });
  } else {
    if (
      data &&
      data.economydata &&
      data.economydata.dailycooldown &&
      data.economydata.dailycooldown === daily
    ) {
        interaction.createFollowup({ content: `Pegando maconha né ;-;, pode naum em!`})
        return;
    } else {
      data.economydata = {
        dailycooldown: daily,
        money:
          data && data.economydata && data.economydata.money
            ? data.economydata.money + money
            : money,
      };
    }
  }

  data.save();

  interaction.createFollowup({
    content: `Ok vc conseguiu ${money} pacotes de maconha!`,
  });
});

function getAmount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}
