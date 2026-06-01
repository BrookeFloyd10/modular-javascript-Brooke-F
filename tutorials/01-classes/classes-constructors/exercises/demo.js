/**** CLASSES & CONSTRUCTORS ****/

/** EXAMPLE 1 - THE CHARACTER BLUEPRINT **/

// These objects have identical structure. What if we had a blueprint to create
// them instead of having to be careful to code them the same way?
const arthur = {
	name: "Arthur",
	health: 100,
};
const merlin = {
	name: "Merlin",
	health: 80,
};


// DEMO: Create a new class called GameCharacter that stores a name and health level
// Make sure both the name (string) and health (integer) are passed in at instantiation

class GameCharacter {
	constructor(characterName, initialHealth) {
this.name = characterName;
this.health = initialHealth;
	}
}

/** EXAMPLE 2 - CREATING SEPARATE INSTANCES **/

// DEMO: Instantiate two new characters with different names and starting health levels
const player1 = new GameCharacter("Arthur", 100);

const player2 = new GameCharacter("Merlin", 80);
// DEMO: Log both characters (full objects)
console.log(player1);
console.log(player2);

console.log(`\n---- ACTIVE GAME CHARACTERS ----`);
// DEMO: Log confirmation of character properties
console.log(`Player 1 loaded: Name ${player1.name}, Starting Health is ${player1.health}.`);
console.log(`Player 2 loaded: Name ${player2.name}, Starting Health is ${player2.health}.`);

// DEMO: Reduce the first player's health by 10 and log combat updates
player1.health -= 10;
console.log(`${player1.name} took damage! Health dropped to ${player1.health} `);
console.log(`${player2.name} avoided combat. Health remains at ${player2.health} `);

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
