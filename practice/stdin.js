const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input: ", (input) => {
  if (input === "hello") {
    console.log(input);
  } else {
    console.log('Input is not "hello"');
  }
  rl.close();
});
