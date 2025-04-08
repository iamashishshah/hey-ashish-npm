#!/usr/bin/env node

import chalk from "chalk";

const line = chalk.cyan("┌" + "─".repeat(78) + "┐");
const empty = chalk.cyan("│") + " ".repeat(78) + chalk.cyan("│");
const end = chalk.cyan("└" + "─".repeat(78) + "┘");

console.log(`
${line}
${empty}
${chalk.cyan("│")}  ${chalk.bold.cyan("👋 Hey there!")} I'm ${chalk.bold("Ashish")} — a Developer by passion and skill.             ${chalk.cyan("│")}
${chalk.cyan("│")}  I explore ${chalk.green("web technologies")}, build ${chalk.yellow("design systems")},                  ${chalk.cyan("│")}
${chalk.cyan("│")}  and love mentoring budding devs on their journey.                      ${chalk.cyan("│")}
${empty}
${chalk.cyan("├" + "─".repeat(78) + "┤")}
${chalk.cyan("│")}  🐦 Twitter   : ${chalk.blue("https://x.com/thisisashishah")}                            ${chalk.cyan("│")}
${chalk.cyan("│")}  💼 LinkedIn  : ${chalk.blue("https://www.linkedin.com/in/thisisashishshah/")}         ${chalk.cyan("│")}
${chalk.cyan("│")}  🌐 Portfolio : ${chalk.blue("https://theashishshah.com")}                             ${chalk.cyan("│")}
${end}
`);
