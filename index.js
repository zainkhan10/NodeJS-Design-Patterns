var conductor = require("./conductor");
var { ExitCommand, CreateCommand } = require("./commands");

var { createInterface } = require("readline");

var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create <fileName> <text> | history | undo | redo | exit");
rl.prompt();

rl.on("line", (input) => {
  var [commandText, ...remaining] = input.split(" ");
  var [fileName, ...fileText] = remaining;
  var text = fileText.join(" ");

  switch (commandText) {
    case "history":
      conductor.printHistory();
      break;

    case "undo":
      conductor.undo();
      break;

    case "redo":
      conductor.redo();
      break;

    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "create":
      conductor.run(new CreateCommand(fileName, text));
      break;

    default:
      console.log(`${commandText} not found!`);
  }

  rl.prompt();
});
