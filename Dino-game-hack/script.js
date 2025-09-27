// Code to hack into the dino game in goggle chrome
// The maximum score the code gives you is 999999 before it resets the score to 0.

// Setup the jump Limit
Runner.instance_.tRex.setJumpVelocity(15); // This code sets up the jump limit of the dino in pixels

// Modify how fast the dino runs
Runner.instance_.setSpeed(2500); //setup the speed of the dinosaur in pixels per second (px/s)
Runner.instance_.setSpeed(-1); //Make the dinosur to go backwards when using negative values

// Hack the game (Make the dinosaur run without being doddged by the obstacles)
var dino = Runner.prototype.gameOver; // This is the original gameOver function assigned to a variable called dino
Runner.protoype.gameOver = function(){} // gameOver function was overridden (replaced) by an empty function having no functionality 
/* Since the gameOver function was overridden by an empty one, the game is customized and the dino 
will not dodge to any obstacles */

// Stop the game
Runner.prototype.gameOver = dino; /* Since the game no longer has a collision stop mechanism after running 
"Hack the game" code, it will run forever. If you want to stop it, you need to employ the Console again. */


