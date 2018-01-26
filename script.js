var playerHealth = 40;
var grantHealth = 10;
var grantLives = 3;
var playerLives = 1;

var play = prompt("Do you want to play?");
	if (play === "yes"){
		name = prompt("What is your name?");
	}
console.log(name + " starts with " + playerHealth + " hitpoints");
console.log("Grant starts with " + grantHealth + " hitpoints and " + grantLives + " lives");
while(playerHealth >= 0, grantHealth >= 0, grantLives > 0){
	var attack2 = Math.floor((Math.random() * 2) + 1);
	playerHealth = playerHealth - attack2;
	console.log(name + " has " + playerHealth + " hitpoints remaining");
	var attack = Math.floor((Math.random() * 2) + 1);
 	grantHealth = grantHealth - attack;
	console.log("Grant has " + grantHealth + " hitpoints remaining");
	if (grantHealth <= 0){
		grantLives--; console.log("Grant now has " + grantLives + " lives left.");
		grantHealth = 10;
	}
	if (grantHealth <= 0){
		grantLives--; console.log("Grant now has " + grantLives + " lives left.");
		grantHealth = 10;
	}
 if (grantLives === 0 && playerHealth > 0){
		console.log("you have won the battle");
 }else if (playerHealth < 1){
	  console.log("you lose");
	}

}
	 /*grantLives===0*/
	/*console.log(name + " has " + playerHealth + " hitpoints remaining");*/
