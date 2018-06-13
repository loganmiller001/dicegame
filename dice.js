"use strict"
// dice roll 
function rollSingleDice(n){
	return Math.floor(Math.random()*n + 1);
}

// playerOne's totals
function playerOneTotal(n){
	let twentySidedResult1 = rollSingleDice(20);
	let twelveSidedResult1 = rollSingleDice(12);
	let tenSidedResult1 = rollSingleDice(10);
	let eightSidedResult1 = rollSingleDice(8);
	let sixSidedResult1 = rollSingleDice(6);
	let fourSidedResult1 = rollSingleDice(4);
	let totalScore1 = (twentySidedResult1 + twelveSidedResult1 + tenSidedResult1 + eightSidedResult1 + sixSidedResult1 + fourSidedResult1);
	console.log(twentySidedResult1);
	console.log(twelveSidedResult1);
	console.log(tenSidedResult1);
	console.log(eightSidedResult1);
	console.log(sixSidedResult1);
	console.log(fourSidedResult1);
	console.log(totalScore1);
		return totalScore1;
}

// playerTwo's totals
function playerTwoTotal(n){
	let twentySidedResult2 = rollSingleDice(20);
	let twelveSidedResult2 = rollSingleDice(12);
	let tenSidedResult2 = rollSingleDice(10);
	let eightSidedResult2 = rollSingleDice(8);
	let sixSidedResult2 = rollSingleDice(6);
	let fourSidedResult2 = rollSingleDice(4);
	let totalScore2 = (twentySidedResult2 + twelveSidedResult2 + tenSidedResult2 + eightSidedResult2 + sixSidedResult2 + fourSidedResult2);
	console.log(twentySidedResult2);
	console.log(twelveSidedResult2);
	console.log(tenSidedResult2);
	console.log(eightSidedResult2);
	console.log(sixSidedResult2);
	console.log(fourSidedResult2);
	console.log(totalScore2);
		return totalScore2;
}
//  calculate scores and determine winner
function runGame(){
	let playerOneScore = playerOneTotal();
	let playerTwoScore = playerTwoTotal();

	console.log("Player one's score:"+ playerOneScore);
	console.log("Player two's score:"+ playerTwoScore);
	if (playerOneScore >= 50){
		alert("Bust! You Lose!");
		alert("Player Two is the Winner!");
	}
	else if (playerTwoScore >=50){
		alert("Bust! You Lose!");
		alert("Player One is the Winner");
	} 
	else if(playerOneScore > playerTwoScore){
		alert("Player One is the winner!");
	}
	else if(playerOneScore == playerTwoScore){
		alert("Draw?!");
	}
	else{
		alert("Player Two is the winner!");
	}

}
	  

runGame();
