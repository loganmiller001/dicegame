"use strict"
function playerName(){
let player = prompt("Enter player name");
	return (player);
}

function rollSingleDice(n){
	return Math.floor(Math.random()*n + 1);
}

function rollHp(n){
	let hitPoints = rollSingleDice(20);
	console.log(hitPoints);
	return hitPoints;
}

function rollAc(n){
	let armorClass = rollSingleDice(10);
	console.log(armorClass);
	return armorClass;
}

function rollStatModifier(n){
	let statModifier = rollSingleDice(8);
	console.log(statModifier);
	return statModifier;
}

function rollStrength(n,statModifier){
	let strength = rollSingleDice(12) + rollStatModifier(8);
	console.log(strength);
	return strength;
}

function rollDexterity(n,statModifier){
	let dexterity = rollSingleDice(12) + rollStatModifier(8);
	console.log(dexterity);
	return dexterity;
}

function rollConstitution(n,statModifier){
	let constitution = rollSingleDice(12) + rollStatModifier(8);
	console.log(constitution);
	return constitution;
}

function rollIntelligence(n,statModifier){
	let intelligence = rollSingleDice(12) + rollStatModifier(8);
	console.log(intelligence);
	return (intelligence);
}

function rollWisdom(n,statModifier){
	let wisdom = rollSingleDice(12) + rollStatModifier(8);
	console.log(wisdom);
	return wisdom;
}

function rollCharisma(n,statModifier){
	let charisma = rollSingleDice(12) + rollStatModifier(8);
	console.log(charisma);
	return charisma;
}


function characterInitative(n){
	let baseInitiative = rollSingleDice(6);
	console.log(baseInitiative);
	return baseInitiative;
}

function characterClass(n){
	let arrayClass = ["Fighter", "Mage", "Thief", "Ranger"];
	let charClass = arrayClass = rollSingleDice(4);
	console.log(charClass);
	return charClass;
}

function characterGenerator(){
	let characterName = playerName();
	let classchar = characterClass();
	let health = rollHp();
	let ac = rollAc();
	let attributeStr = rollStrength();
	let attributeDex = rollDexterity();
	let attributeCon = rollConstitution();
	let attributeInt = rollIntelligence();
	let attributeWis = rollWisdom();
	let attributeChr = rollCharisma();
	let initative = characterInitative();
	console.log("Your name is: " + characterName);
	console.log("Your Class is: " + classchar);
	console.log("Your max health points: " + health);
	console.log("Your armor class is: " + ac);
	console.log("You Strength is: " + attributeStr);
	console.log("Your Dexterity is: " + attributeDex);
	console.log("Your Constitution is: " + attributeCon);
	console.log("Your Intelligence is: " + attributeInt);
	console.log("Your Wisdom is: " + attributeWis);
	console.log("Your Charisma is: " + attributeChr);
	console.log("Your initative is: " + initative);

}
characterGenerator()