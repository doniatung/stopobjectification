//Donia Tung
//SoftDev2 pd7
//K#09 -- Ask Ciricles | Change || Die
//2018-03-06




var svg = document.getElementById("vimage");
var clearSVG = document.getElementById("clear");

var shape = 0;
var xpos, ypos;

var ballObj = drawDot(50,50,15);

var clicked = function(e){
  if (e.toElement == this){
    xpos = e.offsetX;
    ypos = e.offsetY;
      drawDot(xpos, ypos, 30);
  }
};

var drawDot = function(x,y,size){
  var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newthing.setAttribute("cx", x);
  newthing.setAttribute("cy", y);
  newthing.setAttribute("r", size);
  newthing.setAttribute("fill", "yellow");
  newthing.setAttribute("stroke", "black");
  newthing.addEventListener("click", change);
  //svg.appendChild(newthing);
  return newthing
}

var change = function(e){
  e.preventDefault();
  this.setAttribute("fill", "green");
  this.addEventListener("click", newbie)
}

var newbie = function(e){
   svg.removeChild(this)
   drawDot( Math.random()*500, Math.random()*500, 30 )
}

var clear = function(e){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
};

svg.addEventListener("click", clicked);
clearSVG.addEventListener("click", clear);
