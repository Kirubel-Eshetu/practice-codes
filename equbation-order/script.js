const clickme = document.querySelector('.clickhere');

clickme.addEventListener('click', function(){
    const content = document.querySelector('.content');
    const buttonCont = document.querySelector('.button-container');

    content.style.display = 'block';
    buttonCont.style.display = 'none';

})

var number = Math.floor(Math.random()*5)+1;
var takerDisplay = document.getElementById('taker-id');

switch(number){
    case 1: 
        takerDisplay.innerHTML = "The Person taking the next Equb is: <br><br> 1. Eyosias Mengesha <br><br> Congrats! 🥳🎉";
        break;
    case 2:
        takerDisplay.innerHTML = "The Person taking the next Equb is: <br><br> 2. Kibru Abebe <br><br> Congrats! 🥳🎉";
        break;

    case 3: 
    takerDisplay.innerHTML = "The Person taking the next Equb is: <br><br> 3. Kirubel Eshetu <br><br> Congrats! 🥳🎉";
        
        break;

    case 4:
        takerDisplay.innerHTML = "The Person taking the next Equb is: <br><br> 4. Natnael Abera <br><br> Congrats! 🥳🎉";
        
        break;
    case 5:
        takerDisplay.innerHTML = "The Person taking the next Equb is: <br><br> 5. Samuel Teshome <br><br> Congrats! 🥳🎉";

};

const spanElement = document.getElementById("spanid");
const currentYear = new Date().getFullYear();

spanElement.innerHTML = currentYear;

