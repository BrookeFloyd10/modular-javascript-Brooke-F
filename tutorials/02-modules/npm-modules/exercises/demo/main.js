/**** NPM MODULES: SOLUTION ****/

// DEMO: Initiate npm and change type to 'module'
// install with: npm init -y

// DEMO: Install yargs, chalk, and gradient-string dependencies
// install with: npm install yargs chalk gradient-string 
// then read documentation on npm

// DEMO: Import yargs, hideBin, chalk, and gradient
// import with: 
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import chalk from "chalk";
import gradient from "gradient-string";

// DEMO STEP 1: Use gradient-string to create a glowing, multi-color splash header,
// then log it
const gameTitle = gradient("purple", "cyan")("\n==== Welcome To Arcade Realms! ====");
console.log(gameTitle);

// DEMO STEP 2: Configure yargs to grab user arguments from the launch command
// and ensure the hero has a backup value if arg was not used
const argv = yargs(hideBin(process.argv)).argv;
const chosenHeroName = (argv.hero || "Unknown Adventurer");

// DEMO STEP 3: Use chalk to display the hero's name colorfully
console.log(`\nActive Player Identity: ${chalk.bold.blue(chosenHeroName)}`);

// DEMO STEP 4: Display a green confirmation message

console.log(chalk.green("\nAll terminal engine matrix pipelines are stable and online."));
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
