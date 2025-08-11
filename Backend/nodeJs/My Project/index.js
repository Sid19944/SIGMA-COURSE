const giveMeJoke = require("give-me-a-joke");
const figlet = require("figlet");


giveMeJoke.getRandomDadJoke(function(joke){
    console.log(joke);
})


let message = "Dad Jokes";
figlet(message, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});