var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImg = "images/dice"+randomNumber1+".png"; //  image/dice1.png

var image1 = document.querySelectorAll("img")[0]; // o 0 é primeiro img (img1)

image1.setAttribute("src", randomDiceImg);

//_______________________________________________________
//THE SECOND DICE
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImg = "images/dice"+randomNumber2+".png"; //  image/dice1.png

var image2 = document.querySelectorAll("img")[1]; // o 1 é a segunda img (img2)

image2.setAttribute("src", randomDiceImg);

if(randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 venceu!"
}else if (randomNumber1< randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 2 venceu!"
}else{
  document.querySelector("h1").innerHTML = "Empatou!"
}