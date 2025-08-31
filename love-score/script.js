prompt("What is your name?");
var crushName = prompt("What is your crush's name?");

var firstCut = crushName.slice(0,1);
firstCut = firstCut.toUpperCase();
var secondCut = crushName.slice(1,crushName.length);
secondCut = secondCut.toLowerCase();
var modifiedName = firstCut + secondCut;
loveScoreCalculator();

function loveScoreCalculator(){
    
var n = Math.random() * 100;
n = Math.floor(n) + 1;

    if(n>70){
        alert ("Your love percentage with your crush "+ modifiedName +" is "+ n +"%. Your love for each other is brighter than ever :)");
    }
    
    if(n>30 && n<=70){
        alert ("Your love percentage with your crush "+ modifiedName +" is "+ n +"%. There is plenty of room for the improvement of your love :|");
    }
        
    else{
        alert ("Your love percentage with your crush "+ modifiedName +" is "+ n +"%. You go together like oil and water :(");
    }
}



