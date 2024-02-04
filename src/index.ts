#!/usr/bin/env node
import { Command } from "commander";

// declare the program
const program = new Command();

// add actions onto the program
program
  .argument("<string>", "string to log")
  .action((message: string) => {
    console.log("hi " + message);
  })
  .description("Say hi");

//  sub commands
program
  .command("add <numbers...>")
  .action((numbers: Array<number>) => {
    const parsedNumbers = numbers.map(Number);
    const total = parsedNumbers.reduce((a, b) => a + b, 0);
    console.log("total", total);
  })
  .description("Add numbers and log the total");

program.command("max <numbers...>").action((numbers: Array<number>) => {
  const parsedNumbers = numbers.map(Number);
  const max = Math.max(...parsedNumbers);
  console.log("Max is : ", max);
});

// execute the cli with the given arguments
program.parse(process.argv);
