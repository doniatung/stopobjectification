//Team acDC
//Carol Pan & Donia Tung
//SoftDev2 pd7
//K#10 -- Objectification
//2018-03-08


var svg = document.getElementById("vimage");
var clearSVG = document.getElementById("clear");

var shape = 0;
var xpos, ypos;

var drawDot = function(x,y){
  var newthing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  newthing.setAttribute("cx", x);
  newthing.setAttribute("cy", y);
  newthing.setAttribute("r", ballObj.radius);
  newthing.setAttribute("fill", ballObj.color);
  newthing.setAttribute("stroke", "black");
  newthing.addEventListener("click", change);
  //svg.appendChild(newthing);
  return newthing
}

var ballObj = {make: drawDot, x: 0; y: 0, color: "red", radius: "30", display: function(){svg.appendChild(ballObj.make(xpos,ypos))},
 remove: function(obj){svg.removeChild(obj)}, changeX= function(newX){x=newX;}, changeX= function(newY){y=newY;}}

 var changeX = function(x){
   xpos = x;
 }

 var changeY = function(y){
   ypos = y;
 }

var clicked = function(e){
  if (e.toElement == this){
    xpos = e.offsetX;
    ypos = e.offsetY;
    //ballObj.make(xpos,ypos);
    ballObj.display();
  }
};

var change = function(e){
  e.preventDefault();
  this.setAttribute("fill", "green");
  this.addEventListener("click", newbie)
}

var newbie = function(e){
   ballObj.remove(this);
   xpos = Math.random()*500;
   ypos = Math.random()*500;
   ballObj.display();
}

var clear = function(e){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
};

svg.addEventListener("click", clicked);
clearSVG.addEventListener("click", clear);
