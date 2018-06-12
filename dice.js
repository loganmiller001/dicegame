"use strict"
// results of dice rolls
function runGame(n){
	let twentySidedResult1 = rollSingleDice1(20);
	let twelveSidedResult1 = rollSingleDice1(12);
	let tenSidedResult1 = rollSingleDice1(10);
	let eightSidedResult1 = rollSingleDice1(8);
	let sixSidedResult1 = rollSingleDice1(6);
	let fourSidedResult1 = rollSingleDice1(4);
	let totalScore1 = (twentySidedResult1 + twelveSidedResult1 + tenSidedResult1 + eightSidedResult1 + sixSidedResult1 + fourSidedResult1);
	let twentySidedResult2 = rollSingleDice2(20);
	let twelveSidedResult2 = rollSingleDice2(12);
	let tenSidedResult2 = rollSingleDice2(10);
	let eightSidedResult2 = rollSingleDice2(8);
	let sixSidedResult2 = rollSingleDice2(6);
	let fourSidedResult2 = rollSingleDice2(4);
	let totalScore2 = (twentySidedResult2 + twelveSidedResult2 + tenSidedResult2 + eightSidedResult2 + sixSidedResult2 + fourSidedResult2);
	console.log(twentySidedResult1);
	console.log(twelveSidedResult1);
	console.log(tenSidedResult1);
	console.log(eightSidedResult1);
	console.log(sixSidedResult1);
	console.log(fourSidedResult1);
	console.log(totalScore1);
	console.log(twentySidedResult2);
	console.log(twentySidedResult2);
	console.log(tenSidedResult2);
	console.log(eightSidedResult2);
	console.log(sixSidedResult2);
	console.log(fourSidedResult2);
	console.log(totalScore2);
}


// dice roll 
function rollSingleDice1(n){
	return Math.floor(Math.random()*n + 1);
}
function rollSingleDice2(n){
	return Math.floor(Math.random()*n + 1);
}


// get totals of results and add into single total
// playerOne
function playerOneTotal(totalScore1){
	
}

// playerTwo
function playerTwoTotal(){

}


	  

runGame();
