const raining = false;
const temperature = 12;

if (raining) {
  console.log("Don't forget yoour umbrella!");
} else {
  console.log("What's with the umbrella?")
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Some layers might be a good idea.")
}
  else {
  console.log("Whatever you're wearing is probably fine.")
}

console.log("Now you're ready to go outside!")