const Command = require("../../../base/Command");

module.exports = new Command("text anagram", async ({ t, interaction }) => {
  const text = interaction.data.options.getString("text", true);
  const count = calcAnagram(text);
  const anagram = randomAnagram(text);

  interaction.createFollowup({
    content: t.anagram
      .replace("%a", anagram)
      .replace("%t", `${text}`)
      .replace("%c", `${count}`)
      .replace("\\n", "\n"),
  });
});

function factorial(n) {
  return n * factorial(n - 1);
}

function calcAnagram(words) {
  const Words = words.toLowerCase().replace(/[^a-z]/g, "");
  const frequency = {};
  for (const letra of Words) {
    if (frequency[letra]) {
      frequency[letra]++;
    } else {
      frequency[letra] = 1;
    }
  }
  let divisor = 1;
  for (const freq of Object.values(frequency)) {
    divisor *= factorial(freq);
  }
  return factorial(Words.length) / divisor;
}

function randomAnagram(str) {
  let arr = str.split("");
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}
