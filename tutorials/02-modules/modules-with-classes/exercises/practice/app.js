/**** USING MODULES WITH CLASSES: PRACTICE SOLUTION ****/

/*
    Practice separating class blueprints into dedicated files and importing 
    them across complex directory structures.
*/

/*
    TODO: Import the Warrior class
*/
import Warrior from "./classes/Warrior.js";

/*
    TODO: Instantiate a new warrior named Arthur, then switch his stance and
    log the result.
*/

const player = new Warrior("Gabe");

console.log(`${player.name} wanders down the path. A troll emerges from the brush. ${player.switchStance()}`);

