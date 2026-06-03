/**** ES MODULES ****/

// DEMO: Add a package.json file to this directory to configure for ES modules
//done and updated package.json to use modules instead of commonjs
// DEMO: Destructure the exact assets needed using modern syntax.
import { coinSound, playLaser } from "./soundEffects.js";

// DEMO: Log the coin sound and the laser sound
console.log("--- AUDIO BOARD INITIALIZED ---");

console.log(coinSound);
console.log(playLaser());
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
