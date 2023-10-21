const canvas = document.getElementById("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const c = canvas.getContext("2d");

// c.beginPath();
// c.moveTo(110,230);
// c.lineTo(300,400);
// c.strokeStyle = "red";
// c.lineWidth = 2;
// c.globalAlpha= 3;
// c.stroke();
// c.closePath();

// function drawLine(p1,p2,color,thikness) {

//     c.beginPath();
//     c.strokeStyle=color;
//     c.lineWidth=thikness;
//     c.moveTo(p1.x,p1.y);
//     c.lineTo(p2.x,p2.y);
//     c.stroke();
//     c.closePath();
// }

// drawLine({x:100,y:200},{x:200,y:300},"red",3);
// drawLine({x:200,y:400},{x:200,y:200},"blue",3);
// drawLine({x:200,y:200},{x:300,y:600},"red",3);

 function drawLine(p1,p2,color="blue",thikness= 2) {
     c.beginPath();
     c.strokeStyle=color;
     c.lineWidth=thikness;
     c.moveTo(p1.x,p1.y);
     c.lineTo(p2.x,p2.y);
     c.stroke();
     c.closePath();
 }


 canvas.addEventListener("mousedown", onMouseDown);
 canvas.addEventListener("mouseup", onMouseUp);

 function onMouseDown(event){
    let {clientX,clientY} = event;
    c.beginPath();
    c.moveTo(clientX,clientY);
    c.lineWidth=4;
    c.strokeStyle="blue";
 }

 function onMouseUp(event){
    let {clientX,clientY} = event;
    c.lineTo(clientX, clientY);
    c.stroke();
    c.closePath();
 }