"use strict"

function rollSingleDice(n){
	function rollDie(){
		let outcome = Math.floor(Math.random()*n)+1;
		return outcome;
	}
	function rollDice(n,number){
		let outcome=0;
		while (number>0) outcome += rollDie(n);
		console.log();
		return outcome
	}
	console.log();
}	
	  

rollSingleDice();

