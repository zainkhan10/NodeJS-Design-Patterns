var { writeFile } = require("fs");
var path = require("path");

class ExitCommand {
  get name() {
    return "exit... bye!";
  }
  execute() {
    process.exit(0);
  }
}

class CreateCommand {
  constructor(fileName, text) {
    this.fileName = fileName;
    this.body = text;
    this.fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `create ${this.fileName}`;
  }

  execute() {
    writeFile(this.fullPath, this.body, (f) => f);
  }
}

module.exports = { ExitCommand, CreateCommand };
