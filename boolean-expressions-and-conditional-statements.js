const readline = require('readline-sync');

// Initial Game State Variables
let hasTorch = false;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("=========================================");
console.log("Welcome to The Enchanted Realm!");
console.log("=========================================\n");

console.log("You wake up in a dark, mysterious forest. You see two paths ahead of you.");
console.log("1. The dark, snowy Mountains.");
console.log("2. The mysterious, foggy Village.");

const choice1 = readline.question("Which path do you choose? ('mountains' or 'village'): ").toLowerCase();

// Scenario 1: Initial Choices
if (choice1 === "mountains") {
  console.log("\nYou chose the path to the mountains. It is freezing and steep.");
  console.log("You search the area and find an old rusted sword and a torch!");
  hasTorch = true;
  hasSword = true;
} else if (choice1 === "village") {
  console.log("\nYou chose the path to the village. The atmosphere is quiet and eerie.");
  console.log("A mysterious traveler hands you a map and a compass.");
  hasMap = true;
  hasCompass = true;
} else {
  // If user enters anything else, trigger a NOT operator condition or exit
  if (!choice1) {
    console.log("\nYou chose to stay put. The forest mist surrounds you. Game Over.");
    process.exit(0);
  }
  console.log("\nInvalid choice. You wander aimlessly in the mist and get lost. Game Over.");
  process.exit(0);
}

// Scenario 2: The River Crossing (Nested Conditionals and Logical Operators)
console.log("\n-----------------------------------------");
console.log("Scenario 2: The Rushing River");
console.log("-----------------------------------------");
console.log("You reach a wide, rushing river that blocks your path to the castle.");

let choice2 = readline.question("How do you want to cross the river? (type 'bridge' or 'wade'): ").toLowerCase();

if (choice2 === "bridge") {
  // Nested Conditional
  if (hasTorch && hasSword) {
    console.log("The bridge is guarded by a troll! You use your torch and sword to scare it away and cross safely.");
  } else if (hasTorch || hasSword) {
    console.log("The bridge is guarded by a troll! With limited gear, you barely make it across, losing your torch in the struggle.");
    hasTorch = false;
  } else {
    console.log("The bridge is guarded by a troll! Without any items to defend yourself, you are forced to turn back. Game Over.");
    process.exit(0);
  }
} else if (choice2 === "wade") {
  // Nested Conditional with Logical Operators
  if (hasMap && hasCompass) {
    console.log("Using the map and compass, you navigate the shallow waters safely and cross to the other side.");
  } else {
    console.log("You try to wade through the river without navigation tools and get swept away by the current. Game Over.");
    process.exit(0);
  }
} else {
  console.log("You hesitate too long. The dark night closes in and you are trapped. Game Over.");
  process.exit(0);
}

// Scenario 3: The Final Challenge - The Castle Gates
console.log("\n-----------------------------------------");
console.log("Final Scenario: The Castle Gate");
console.log("-----------------------------------------");
console.log("You reach the castle gates and face a sleeping dragon guarding the treasure!");

// Complex Boolean Expression (Logical Operators: &&, ||)
if (hasSword && hasTorch && hasCompass) {
  console.log("\nSUCCESS: You used the compass to navigate the dark halls, the torch to see, and the sword to defeat the dragon. You win the game!");
} else if (hasSword || hasCompass) {
  console.log("\nPARTIAL SUCCESS: You made it through and retrieved some items, but without the full set, the dragon escapes with the treasure.");
} else {
  console.log("\nDEFEAT: You faced the dragon unprepared and empty-handed.");
}