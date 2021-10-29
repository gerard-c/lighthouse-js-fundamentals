const raining = false;
const temperature = 41;

if (raining) {
  console.log("Don't forget yoour umbrella!");
} else if (!raining) {
  console.log("You can leave your umbrella at home");
}

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Some layers might be a good idea.");
} else if (temperature < -40 || temperature > 40) {
  console.log("Nobody should be going outside right now...");
} else {
  console.log("Whatever you're wearing is probably fine.");
}

const isCitizen = true;
const age = 26;

if (isCitizen && age >= 18) {
  console.log("You are eligible to vote.")
}