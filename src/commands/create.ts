import { Command } from "@oclif/command";
import cli from "cli-ux"; // TODO: Use for spinner
import { prompt } from "enquirer";
import * as fs from "fs"; // TODO: import individual components
import { exec } from "child_process";

export default class Create extends Command {
  description = "This command create a base threejs scafolding.";
  askProjectName = {
    type: "input",
    name: "project_name",
    initial: "default", // TODO: Change to something useful
    message: "What would you like to name your project?"
  };

  async run() {
    prompt(this.askProjectName)
      .then(async res => {
        const ans = res["project_name"];
        const path = `${__dirname}/${ans}`;
        cli.action.start("Creating your project");

        fs.mkdir(path, err => {
          // fs.writeFile(
          //   `${__dirname}/${ans}/src/app.js`,
          //   `declare module 'fs';`,
          //   err => {
          //     console.log("file created successfully.");
          //   }
          // );

          if (err) throw "Directory already exists."; // TODO: handle this error if directory already exists

          // TODO: check if npm/node is installed
          exec(`cd ${path} && yarn init -y`, err => {
            if (err) throw err; // TODO: handle this error appropriately

            exec(`cd ${path} && yarn add three`, err => {
              if (err) throw err; // TODO: handle this error appropriately
            });

            exec(`yarn add @types/three -D`, err => {
              if (err) throw err; // TODO: handle this error appropriately
            });
          });
        });
      })
      .catch(console.error);
  }
}
