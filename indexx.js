var n1=(Math.random()*6);
var nn1=Math.floor(n1)+1;
var new1="images/dice" + nn1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",new1);


var n2=(Math.random()*6);
var nn2=Math.floor(n2)+1;
var new2="images/dice"+ nn2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",new2);

if(nn1 < nn2)
{
document.querySelector("h1").innerHTML="Player 2 Wins ✌️";
}

else if(nn1 > nn2)
{
document.querySelector("h1").innerHTML="Player 1 Wins ✌️";
}

else
{
    document.querySelector("h1").innerHTML="DRAW"; 
}