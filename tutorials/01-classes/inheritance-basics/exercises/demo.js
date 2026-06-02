/**** INHERITANCE BASICS ****/

/** EXAMPLE 1 - THE BASE PARENT CLASS **/

// DEMO: Define a generalized BaseCharacter class that has some properties
class BaseCharacter {
    constructor(characterName, initialHealth) {
    this.name = characterName;
    this.health = initialHealth;
    }
// and a method all characters should have in common.
    takeDamage(amount) {
        this.health -= amount;
        return `${this.name} takes ${amount} damage! Health: ${this.health}`;
    }
}

/** EXAMPLE 2 - THE EXTENDED CHILD CLASS **/

// DEMO: Create a specific Wizard class that inherits from BaseCharacter
// but also has a magicPoints property and a castSpell() method.

class Wizard extends BaseCharacter {
    constructor(characterName, initialHealth, startingMagic) {
        super(characterName, initialHealth);
        this.magicPoints = startingMagic;
    }
    castBasicSpell(spellName) {
        this.spell = spellName;
        this.magicPoints -= 10;
        return `${this.name} casts ${this.spell}! Magic remaining: ${this.magicPoints}`;
    }
    castFatalSpell(spellName) {
        this.spell = spellName;
        this.magicPoints -= 25;
        return `${this.name} casts ${this.spell}! Magic remaining: ${this.magicPoints}`;
    }
}

// DEMO: Instantiate a Wizard character
const william = new Wizard("William", 100, 50);

// console.log(`${}`);
console.log(william.takeDamage(50));
console.log(william.castBasicSpell("Atomic Wedgie Spell"));
console.log(william.castFatalSpell("Deadly Swirlie Spell"));


// DEMO: Call both methods available for Wizard characters

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
