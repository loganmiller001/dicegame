"use strict"
function playerName(){
let player = prompt("Enter player name");
	return (player);
}

function playerClass(){
	let charClass = prompt("Enter your character class");
		return (charClass);
}

function playerRace(){
	let charRace = prompt("Enter your character race");
		return charRace;
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

function rollDamage(n){
	let damNumber = rollSingleDice(8);
	console.log(damNumber);
	return damNumber;
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

function characterInitiative(n){
	let baseInitiative = rollSingleDice(6);
	console.log(baseInitiative);
	return baseInitiative;
}

function attackRoll(n){
	let attackScore = rollSingleDice(20);
	console.log(attackScore);
	return attackScore;
}

function characterGenerator(){
	let characterName = playerName();
	let characterClass = playerClass();
	let characterRace = playerRace();
	let health = rollHp();
	let toHit = attackRoll()
	let ac = rollAc();
	let attributeStr = rollStrength();
	let attributeDex = rollDexterity();
	let attributeCon = rollConstitution();
	let attributeInt = rollIntelligence();
	let attributeWis = rollWisdom();
	let attributeChr = rollCharisma();
	let playerInitiative = characterInitiative();
	console.log("Your name is: " + characterName);
	console.log("Your class is: " + characterClass);
	console.log("Your race is: " + characterRace);
	console.log("Your max health points: " + health);
	console.log("Your hit roll was: " + toHit); 
	console.log("Your armor class is: " + ac);
	console.log("You Strength is: " + attributeStr);
	console.log("Your Dexterity is: " + attributeDex);
	console.log("Your Constitution is: " + attributeCon);
	console.log("Your Intelligence is: " + attributeInt);
	console.log("Your Wisdom is: " + attributeWis);
	console.log("Your Charisma is: " + attributeChr);
	console.log("Your initiative is: " + playerInitiative);

}
alert("You encounter a monster");

function monsterAttack(n){
	let attack = rollSingleDice(20);
	console.log(attack);
		return attack;
}

function monsterDamage(n){
	let damage = rollSingleDice(8);
	console.log(damage);
		return damage;
}

function monsterHp(n){
	let hp = rollSingleDice(12);
	console.log(hp);
		return hp;
}

function monsterArmor(n){
	let enemyAc = rollSingleDice(6);
	console.log(enemyAc);
		return enemyAc;
}

function monsterInitiative(n){
	let enemyInit = rollSingleDice(4);
	console.log(enemyInit);
		return enemyInit
}

function monsterGenerator(){
	let enemyHealth = monsterHp();
	let enemyAttack = monsterAttack();
	let enemyDamage = monsterDamage();
	let enemyArmor = monsterArmor();
	let enemyInitiative = monsterInitiative();
	console.log("Enemy max health is: " + enemyHealth);
	console.log("Enemy attack roll: " + enemyAttack);
	console.log("Enemy damage roll is: " + enemyDamage);
	console.log("Enemy armor class is: " + enemyArmor);
	console.log("Enemy initiative is: " + enemyInitiative);
}

function runGame(){
	let player = characterGenerator();
	let monster = monsterGenerator();
	
}
// function runGame(){
	//let player = characterGenerator();
	//let monster = monsterGenerator();
	 //player.health -=monsterAttack(); 
// }
// let character = object{
	// character.health = rollHp(),
// }
// 

runGame()




