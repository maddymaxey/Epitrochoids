 
  var myDocument=activeDocument;
  var myLayer = myDocument.activeLayer;
  var x;

 app.defaultStroked = true;

 
plotEpitrochoid2();

 function addPath(){
 
 if ( app.documents.length > 0 ) {
var lineList = new Array(10);
for ( i = 0; i < lineList.length; i++ ) {
    var num= Math.pow(i,2);
lineList[i] = new Array( i * 10 + 50, num);
}
newPath.filled= false;
newPath = app.activeDocument.pathItems.add();
newPath.setEntirePath(lineList);
}
  
}
 
function plotEpitrochoid() {
if ( app.documents.length > 0 ) {
var lineList = new Array();
var R = 5;
var r = 3;
var h = 8;
var theta = 1;
var rotation= 20;
var step = 1;
var i = 0;
var x;
var y;
 
for ( i =0; (i <=360) ; i++ ) {
x = (R + r) * Math.cos(theta) - h * Math.cos((R + r) / r * theta)

y = (R + r) * Math.sin(theta) - h * Math.sin((R + r) / r * theta)

lineList[i] = new Array(x, y);
theta += step;
}  
newPath.filled= false;
newPath = app.activeDocument.pathItems.add();
newPath.setEntirePath(lineList);
}  
  
} 


 function plotEpitrochoid2() {
var R = 10;
var r = 7;
var h = 8;
var theta = 1;
var rotation= 10;
var step = 1;
var i = 0;
var x;
var y;
var locationx = 20;
var locationy = -100;
     
 for ( p =0; (p <=20) ; p+= 2 ) {
     
if ( app.documents.length > 0 ) {
var lineList = new Array();

 
for ( i =0; (i <=360) ; i++ ) {
x = (R + r) * Math.cos(theta) - h * Math.cos((R + r) / r * theta)+locationx

y = (R + r) * Math.sin(theta) - h * Math.sin((R + r) / r * theta)+locationy

lineList[i] = new Array(x, y);
theta += step;
} //end parametrc equation
newPath.filled= false;
var shape = app.activeDocument.pathItems.add();
shape.setEntirePath(lineList);

}  
r++;
step++;
locationx += 35
 } 

}  

