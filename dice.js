"use strict"

function runGame(n) {
	let twentySidedResult = rollSingleDice(20);
	let tenSidedResult = rollSingleDice(10);
	let twelveSidedResult= rollSingleDice(12);
	let eightSidedResult = rollSingleDice(8);
	let sixSidedResult = rollSingleDice(6);
	let fourSidedResult = rollSingleDice(4);
	

}


function rollSingleDice(n){
	return Math.floor(Math.random()*n + 1);
}
	
// function rollDie20(){
//  	let sides = 20;
//  	let result = rollSingleDice(sides);
//  	return result;
// }
	  

runGame();
