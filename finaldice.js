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
	let playerHealth = rollHp();
	let toHit = attackRoll();
	let playerDamage = rollDamage();
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
	console.log("Your max health points: " + playerHealth);
	console.log("Your damage roll was: " + playerDamage);
	console.log("Your hit roll was: " + toHit); 
	console.log("Your armor class is: " + ac);
	console.log("You Strength is: " + attributeStr);
	console.log("Your Dexterity is: " + attributeDex);
	console.log("Your Constitution is: " + attributeCon);
	console.log("Your Intelligence is: " + attributeInt);
	console.log("Your Wisdom is: " + attributeWis);
	console.log("Your Charisma is: " + attributeChr);
	console.log("Your initiative is: " + playerInitiative);

	let player = {
		health: playerHealth,
		attack: toHit,
		damage: playerDamage,
		armor: ac,
		initiative: playerInitiative,
	};
	return player;
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

	let monster = {
		health: enemyHealth,
		attack: enemyAttack,
		damage: enemyHealth,
		armor: enemyArmor,
		initiative: enemyInitiative
	};

	return monster;
}

function runGame(){
	let player = characterGenerator();
	let monster = monsterGenerator();

	while(player.health > 0 && monster.health > 0){

		if (player.initiative > monster.initiative){
			alert("Player attacks")
			monster.health = playerAttack(player, monster);
			console.log(monster.health);
		}
		else{
			alert("Monster attacks")
			player.health = monsterAttack(player, monster);
			console.log(player.health);
				
		}
	}
	// 
}

function playerAttack(player, monster){
	if (player.attack > monster.armor){
		monster.health -= player.damage;
	}
	else{
		alert("Player misses!")
	}
	return monster.health;
}

function monsterAttack(player, monster){
	if (monster.attack > player.armor){
		player.health -= monster.damage;
	}
	else{
		alert("Monster misses!")
	}
	return player.health;
}   

runGame()




